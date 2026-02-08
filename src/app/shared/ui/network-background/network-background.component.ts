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
  baseX: number;
  baseY: number;
  size: number;
  // Grid coordinates for connections
  ix: number;
  iy: number;
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

  // Grid configuration
  private cols = 0;
  private rows = 0;
  private spacing = 40; // Space between particles

  // Animation config
  private time = 0;

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
  }

  private resize = () => {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      this.width = parent.clientWidth;
      this.height = parent.clientHeight;
      canvas.width = this.width;
      canvas.height = this.height;

      this.createParticles();
    }
  };

  private onMouseMove = (e: MouseEvent) => {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  };

  private createParticles() {
    this.particles = [];
    this.cols = Math.ceil(this.width / this.spacing) + 1;
    this.rows = Math.ceil(this.height / this.spacing) + 1;

    for (let iy = 0; iy < this.rows; iy++) {
      for (let ix = 0; ix < this.cols; ix++) {
        // Hexagonal/staggered offset for more organic look
        // const xOffset = (iy % 2) * (this.spacing / 2);
        const xOffset = 0;

        const x = ix * this.spacing + xOffset;
        const y = iy * this.spacing;

        this.particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          ix,
          iy,
          size: 2,
        });
      }
    }
  }

  private animate = () => {
    if (!this.ctx) return;

    this.time += 0.01; // Animation speed

    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update Particles
    for (const p of this.particles) {
      // Wave effect
      // Calculate distance from center or just use coordinates for wave
      const waveX = Math.sin(p.ix * 0.2 + this.time) * 10;
      const waveY = Math.cos(p.iy * 0.2 + this.time) * 10;

      // Mouse interaction (Repel/Attract)
      const dx = this.mouse.x - p.baseX;
      const dy = this.mouse.y - p.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 300;

      let forceX = 0;
      let forceY = 0;

      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance;
        const angle = Math.atan2(dy, dx);
        const moveDistance = force * 40; // Max displacement
        forceX = Math.cos(angle) * moveDistance;
        forceY = Math.sin(angle) * moveDistance;
      }

      p.x = p.baseX + waveX - forceX;
      p.y = p.baseY + waveY - forceY;

      // Dynamic size based on wave height (simulated Z-axis)
      // p.size = 2 + Math.sin(p.ix * 0.2 + this.time) * 1;
    }

    // Draw Connections (Right and Bottom neighbors)
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 0.5; // Thinner lines for elegance

    // Create a 2D access to particles for easier neighbor finding
    // Since particles are generated in order (row by row), we can map (ix, iy) to index
    // index = iy * cols + ix

    for (const p of this.particles) {
      // Right neighbor
      if (p.ix < this.cols - 1) {
        const rightIndex = p.iy * this.cols + (p.ix + 1);
        if (rightIndex < this.particles.length) {
          const neighbor = this.particles[rightIndex];
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(neighbor.x, neighbor.y);
        }
      }

      // Bottom neighbor
      if (p.iy < this.rows - 1) {
        const bottomIndex = (p.iy + 1) * this.cols + p.ix;
        if (bottomIndex < this.particles.length) {
          const neighbor = this.particles[bottomIndex];
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(neighbor.x, neighbor.y);
        }
      }
    }

    this.ctx.globalAlpha = 0.3; // Base opacity for lines
    this.ctx.stroke();

    // Draw Particles
    this.ctx.globalAlpha = 0.8; // Higher opacity for dots
    this.ctx.fillStyle = this.color;

    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
