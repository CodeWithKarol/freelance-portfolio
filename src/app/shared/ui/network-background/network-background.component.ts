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

interface Point {
  x: number;
  y: number;
  connections: Point[];
}

interface SignalPacket {
  start: Point;
  end: Point;
  progress: number; // 0 to 1
  speed: number;
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
        pointer-events: none;
        z-index: 0;
      }
    `,
  ],
})
export class NetworkBackgroundComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @Input() color = '#3b82f6';

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private width = 0;
  private height = 0;
  private points: Point[] = [];
  private signals: SignalPacket[] = [];
  private mouse = { x: -1000, y: -1000 };
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
      // Increase resolution for sharp rendering on high DPI
      const dpr = window.devicePixelRatio || 1;
      canvas.width = this.width * dpr;
      canvas.height = this.height * dpr;
      this.ctx?.scale(dpr, dpr);
      canvas.style.width = `${this.width}px`;
      canvas.style.height = `${this.height}px`;

      this.initNetwork();
    }
  };

  private onMouseMove = (e: MouseEvent) => {
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
  };

  private initNetwork() {
    this.points = [];
    this.signals = [];
    const spacing = 80;
    const cols = Math.ceil(this.width / spacing);
    const rows = Math.ceil(this.height / spacing);

    // Create Grid Points
    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        // Add some jitter to make it less robotic
        const x = i * spacing + (Math.random() - 0.5) * 20;
        const y = j * spacing + (Math.random() - 0.5) * 20;
        this.points.push({ x, y, connections: [] });
      }
    }

    // Create Connections (Architecture)
    // Connect to nearest neighbors only
    this.points.forEach((p1, index) => {
      this.points.slice(index + 1).forEach((p2) => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Connect if close enough
        if (dist < spacing * 1.5) {
          p1.connections.push(p2);
          // Optional: Add some randomness to avoid connecting EVERYTHING
          // if (Math.random() > 0.5) p1.connections.push(p2);
        }
      });
    });
  }

  private spawnSignal() {
    if (this.points.length === 0) return;

    // Pick a random point that has connections
    const startPoint = this.points[Math.floor(Math.random() * this.points.length)];
    if (startPoint.connections.length > 0) {
      const endPoint =
        startPoint.connections[Math.floor(Math.random() * startPoint.connections.length)];
      this.signals.push({
        start: startPoint,
        end: endPoint,
        progress: 0,
        speed: 0.02 + Math.random() * 0.04, // Varied speed
      });
    }
  }

  private animate = () => {
    if (!this.ctx) return;
    this.time++;

    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw Static Architecture (Subtle)
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = this.color;

    // Draw connections
    this.points.forEach((p) => {
      // Draw Node
      // Mouse Proximity Glow
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isNearMouse = dist < 150;

      // Base Opacity
      let opacity = 0.1;
      if (isNearMouse) {
        opacity = 0.4 * (1 - dist / 150);
      }

      this.ctx!.globalAlpha = opacity;
      this.ctx!.beginPath();
      p.connections.forEach((conn) => {
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.lineTo(conn.x, conn.y);
      });
      this.ctx!.stroke();

      // Draw Point
      this.ctx!.globalAlpha = isNearMouse ? 0.8 : 0.25;
      this.ctx!.fillStyle = this.color;
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, isNearMouse ? 2.5 : 1.5, 0, Math.PI * 2);
      this.ctx!.fill();
    });

    // 2. Manage & Draw Signals (Data Flow)
    // Spawn new signals randomly
    if (this.signals.length < 25 && Math.random() > 0.85) {
      this.spawnSignal();
    }

    this.ctx.globalAlpha = 1;
    for (let i = this.signals.length - 1; i >= 0; i--) {
      const sig = this.signals[i];
      sig.progress += sig.speed;

      if (sig.progress >= 1) {
        // Signal reached destination
        // Chance to continue to next node
        if (Math.random() > 0.3 && sig.end.connections.length > 0) {
          // Hop to next
          const nextNode =
            sig.end.connections[Math.floor(Math.random() * sig.end.connections.length)];
          // Avoid bouncing back immediately if possible
          if (nextNode !== sig.start || sig.end.connections.length === 1) {
            sig.start = sig.end;
            sig.end = nextNode;
            sig.progress = 0;
          } else {
            this.signals.splice(i, 1);
          }
        } else {
          this.signals.splice(i, 1);
        }
        continue;
      }

      // Draw Signal
      const currentX = sig.start.x + (sig.end.x - sig.start.x) * sig.progress;
      const currentY = sig.start.y + (sig.end.y - sig.start.y) * sig.progress;

      // Glow effect
      const gradient = this.ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 4);
      gradient.addColorStop(0, this.color); // Core
      gradient.addColorStop(1, 'rgba(0,0,0,0)'); // Fade

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(currentX, currentY, 4, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animationFrameId = requestAnimationFrame(this.animate);
  };
}
