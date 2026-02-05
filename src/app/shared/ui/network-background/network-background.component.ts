import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  NgZone,
  inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

@Component({
  selector: 'app-network-background',
  standalone: true,
  template: ` <canvas #canvas class="absolute inset-0 w-full h-full block"></canvas> `,
  styles: [
    `
      :host {
        display: block;
        position: absolute;
        inset: 0;
        pointer-events: none; /* Let clicks pass through to content */
        z-index: 0;
      }
      canvas {
        pointer-events: auto; /* Re-enable pointer events for interaction if needed, or keep none */
      }
    `,
  ],
})
export class NetworkBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() color = '#3b82f6'; // Primary blue default

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private width = 0;
  private height = 0;
  private mouse = { x: -1000, y: -1000 };

  // Config
  private particleCount = 60;
  private connectionDistance = 150;
  private mouseDistance = 200;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCanvas();
      this.ngZone.runOutsideAngular(() => {
        this.animate();
        window.addEventListener('resize', this.resize);
        window.addEventListener('mousemove', this.onMouseMove);
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
      window.removeEventListener('resize', this.resize);
      window.removeEventListener('mousemove', this.onMouseMove);
    }
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resize();
    this.createParticles();
  }

  private resize = () => {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      this.width = parent.clientWidth;
      this.height = parent.clientHeight;
      canvas.width = this.width;
      canvas.height = this.height;
      // Re-create particles on resize to distribute them well?
      // Or just let them be. Let's add more if screen gets huge, remove if small.
      this.particleCount = Math.floor((this.width * this.height) / 15000);
      this.createParticles();
    }
  };

  private onMouseMove = (e: MouseEvent) => {
    // We need to account for the canvas position relative to the viewport
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  };

  private createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.5, // Slow drift
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }
  }

  private animate = () => {
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update and Draw Particles
    this.particles.forEach((p) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse Interaction (Repel)
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.mouseDistance) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (this.mouseDistance - distance) / this.mouseDistance;
        const directionX = forceDirectionX * force * 2; // Strength
        const directionY = forceDirectionY * force * 2;
        p.x -= directionX;
        p.y -= directionY;
      }

      // Draw Particle
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx!.fillStyle = this.color;
      this.ctx!.globalAlpha = 0.5;
      this.ctx!.fill();
    });

    // Draw Connections
    this.ctx.globalAlpha = 1; // Reset
    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          const opacity = 1 - distance / this.connectionDistance;
          this.ctx.beginPath();
          this.ctx.strokeStyle = this.color;
          this.ctx.globalAlpha = opacity * 0.2; // Faint lines
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
