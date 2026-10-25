"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Packet = { a: number; b: number; t: number; speed: number };

const LINK_DISTANCE = 150;
const LINK_DISTANCE_SQ = LINK_DISTANCE ** 2;
const MOUSE_DISTANCE = 200;
const PACKET_RADIUS = 6;
const MAX_PACKETS = 18;
const ACCENT = "107, 155, 209";
const ACCENT_2 = "169, 188, 216";

// Animated network topology: drifting nodes, links between neighbors,
// and "packets" travelling along those links.
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pre-render the packet glow once instead of building a gradient every frame.
    const sprite = document.createElement("canvas");
    sprite.width = sprite.height = PACKET_RADIUS * 4;
    const spriteCtx = sprite.getContext("2d")!;
    const glow = spriteCtx.createRadialGradient(PACKET_RADIUS * 2, PACKET_RADIUS * 2, 0, PACKET_RADIUS * 2, PACKET_RADIUS * 2, PACKET_RADIUS * 2);
    glow.addColorStop(0, "rgba(225, 234, 245, 0.8)");
    glow.addColorStop(0.4, `rgba(${ACCENT}, 0.35)`);
    glow.addColorStop(1, `rgba(${ACCENT}, 0)`);
    spriteCtx.fillStyle = glow;
    spriteCtx.fillRect(0, 0, sprite.width, sprite.height);
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let packets: Packet[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((width * height) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.8,
      }));
      packets = [];
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DISTANCE_SQ) continue;

          const dist = Math.sqrt(distSq);
          ctx.strokeStyle = `rgba(${ACCENT}, ${(1 - dist / LINK_DISTANCE) * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          if (!reducedMotion && packets.length < MAX_PACKETS && Math.random() < 0.0008) {
            packets.push({ a: i, b: j, t: 0, speed: 0.008 + Math.random() * 0.012 });
          }
        }
      }

      // Links from the cursor to nearby nodes.
      for (const n of nodes) {
        const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (dist > MOUSE_DISTANCE) continue;
        ctx.strokeStyle = `rgba(${ACCENT_2}, ${(1 - dist / MOUSE_DISTANCE) * 0.3})`;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(n.x, n.y);
        ctx.stroke();
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${ACCENT}, 0.5)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      packets = packets.filter((p) => {
        const a = nodes[p.a];
        const b = nodes[p.b];
        p.t += p.speed;
        if (p.t >= 1 || Math.hypot(a.x - b.x, a.y - b.y) > LINK_DISTANCE) return false;

        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.drawImage(sprite, x - PACKET_RADIUS, y - PACKET_RADIUS, PACKET_RADIUS * 2, PACKET_RADIUS * 2);
        return true;
      });

      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onResize = () => {
      resize();
      if (reducedMotion) draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
      {/* Soft glows via radial gradients; a CSS blur filter here is expensive to animate. */}
      <div className="animate-drift absolute -top-1/4 -left-1/4 h-[70vmax] w-[70vmax] bg-[radial-gradient(circle,rgb(107_155_209/0.07),transparent_65%)] will-change-transform" />
      <div className="animate-drift absolute -right-1/4 -bottom-1/4 h-[60vmax] w-[60vmax] bg-[radial-gradient(circle,rgb(169_188_216/0.05),transparent_65%)] will-change-transform [animation-delay:-12s]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
