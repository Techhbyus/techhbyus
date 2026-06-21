"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#8052ff", "#8052ff", "#ffffff", "#ffffff", "#ffb829", "#15846e"];
const SPACING = 56;
const CURSOR_RADIUS = 130;
const LINE_DISTANCE = SPACING * 1.05;

export default function ParticleField({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles = [];
    let frameId = null;
    const pointer = { x: -9999, y: -9999 };

    let grid = [];
    let links = [];

    const buildGrid = () => {
      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const list = [];
      grid = [];
      for (let row = 0; row < rows; row += 1) {
        grid[row] = [];
        for (let col = 0; col < cols; col += 1) {
          const baseX = col * SPACING + ((row % 2) * SPACING) / 2;
          const baseY = row * SPACING;
          const jitterX = (Math.random() - 0.5) * SPACING * 0.25;
          const jitterY = (Math.random() - 0.5) * SPACING * 0.25;
          const particle = {
            baseX: baseX + jitterX,
            baseY: baseY + jitterY,
            x: baseX + jitterX,
            y: baseY + jitterY,
            r: 1.3 + Math.random() * 1.7,
            phase: Math.random() * Math.PI * 2,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          };
          grid[row][col] = particle;
          list.push(particle);
        }
      }

      links = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const current = grid[row][col];
          const right = grid[row][col + 1];
          const below = grid[row + 1] ? grid[row + 1][col] : null;
          if (right) links.push([current, right]);
          if (below) links.push([current, below]);
        }
      }

      return list;
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildGrid();
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height);

      ctx.lineWidth = 1;
      ctx.strokeStyle = "#ffffff";
      for (const [a, b] of links) {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        ctx.globalAlpha = Math.max(0, 1 - dist / LINE_DISTANCE) * 0.16;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (time) => {
      for (const p of particles) {
        const driftX = Math.sin(time * 0.00025 + p.phase) * 5;
        const driftY = Math.cos(time * 0.0002 + p.phase) * 5;
        let targetX = p.baseX + driftX;
        let targetY = p.baseY + driftY;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < CURSOR_RADIUS) {
          const force = ((CURSOR_RADIUS - dist) / CURSOR_RADIUS) * 22;
          targetX += (dx / dist) * force;
          targetY += (dy / dist) * force;
        }

        p.x += (targetX - p.x) * 0.08;
        p.y += (targetY - p.y) * 0.08;
      }
      draw(time);
      frameId = requestAnimationFrame(tick);
    };

    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const onTouch = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = touch.clientX - rect.left;
      pointer.y = touch.clientY - rect.top;
    };

    const onTouchEnd = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    if (reduceMotion) {
      draw(0);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`particle-field ${className}`} aria-hidden="true" />;
}
