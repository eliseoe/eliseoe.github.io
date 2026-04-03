import { useEffect, useRef } from "react";

interface LorenzCanvasProps {
  width: number;
  height: number;
  className?: string;
}

const LorenzCanvas = ({ width, height, className }: LorenzCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    context.scale(devicePixelRatio, devicePixelRatio);

    const sigma = 10;
    const rho = 28;
    const beta = 8 / 3;
    const dt = 0.003;
    const scale = 6.5;
    const centerX = width / 2;
    const centerY = height / 2 + 30;

    const points: { x: number; y: number; z: number }[] = [];
    let x = 0.1;
    let y = 0;
    let z = 0;
    for (let index = 0; index < 18000; index += 1) {
      const dx = sigma * (y - x) * dt;
      const dy = (x * (rho - z) - y) * dt;
      const dz = (x * y - beta * z) * dt;
      x += dx;
      y += dy;
      z += dz;
      points.push({ x, y, z });
    }

    const project = (point: { x: number; y: number; z: number }) => ({
      px: centerX + point.x * scale * 0.95,
      py: centerY - (point.z - 25) * scale * 0.75,
    });

    let frame = 0;
    let animationId = 0;
    const trailLength = 600;

    const draw = () => {
      context.clearRect(0, 0, width, height);

      context.globalAlpha = 0.08;
      context.strokeStyle = "hsl(220, 30%, 45%)";
      context.lineWidth = 0.5;
      context.beginPath();
      const ghostStart = project(points[0]);
      context.moveTo(ghostStart.px, ghostStart.py);
      for (let index = 1; index < points.length; index += 1) {
        const point = project(points[index]);
        context.lineTo(point.px, point.py);
      }
      context.stroke();

      const start = frame % points.length;
      for (let index = 0; index < trailLength - 1; index += 1) {
        const first = project(points[(start + index) % points.length]);
        const second = project(points[(start + index + 1) % points.length]);
        const alpha = (index / trailLength) * 0.9;
        context.globalAlpha = alpha;
        context.strokeStyle = `hsl(170, 60%, ${45 + (index / trailLength) * 15}%)`;
        context.lineWidth = 0.8 + (index / trailLength) * 1.5;
        context.beginPath();
        context.moveTo(first.px, first.py);
        context.lineTo(second.px, second.py);
        context.stroke();
      }

      const head = project(points[(start + trailLength - 1) % points.length]);
      context.globalAlpha = 0.9;
      context.fillStyle = "hsl(170, 70%, 60%)";
      context.beginPath();
      context.arc(head.px, head.py, 2.5, 0, Math.PI * 2);
      context.fill();

      context.globalAlpha = 0.3;
      context.fillStyle = "hsl(170, 60%, 50%)";
      context.beginPath();
      context.arc(head.px, head.py, 6, 0, Math.PI * 2);
      context.fill();

      frame += 3;
      animationId = window.requestAnimationFrame(draw);
    };

    draw();
    return () => window.cancelAnimationFrame(animationId);
  }, [height, width]);

  return <canvas ref={canvasRef} style={{ width, height }} className={className} />;
};

export default LorenzCanvas;
