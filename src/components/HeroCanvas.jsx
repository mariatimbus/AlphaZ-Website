import { useEffect, useRef } from 'react';

export default function HeroCanvas({ sectionRef }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef?.current || containerRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    let dots = [];
    let mouse = { x: -1000, y: -1000 };
    let animationId;
    let startTime = Date.now();

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
    const dotSize = 2;
    const gap = isTouchDevice ? 36 : 24;
    const baseColor = "#404040";
    const glowColor = "#22d3ee";
    const proximity = isTouchDevice ? 0 : 120;
    const glowIntensity = 1;
    const waveSpeed = 0.5;

    function hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 0, b: 0 };
    }

    const baseRgb = hexToRgb(baseColor);
    const glowRgb = hexToRgb(glowColor);

    function buildGrid() {
      const rect = section.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const cellSize = dotSize + gap;
      const cols = Math.ceil(rect.width / cellSize) + 1;
      const rows = Math.ceil(rect.height / cellSize) + 1;

      const offsetX = (rect.width - (cols - 1) * cellSize) / 2;
      const offsetY = (rect.height - (rows - 1) * cellSize) / 2;

      dots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: offsetX + col * cellSize,
            y: offsetY + row * cellSize,
            baseOpacity: 0.3 + Math.random() * 0.2,
          });
        }
      }
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = document.visibilityState !== 'hidden';
      if (isVisible && !animationId) {
        animationId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    function draw() {
      if (!isVisible) {
        animationId = null;
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const mx = mouse.x;
      const my = mouse.y;
      const proxSq = proximity * proximity;
      const time = (Date.now() - startTime) * 0.001 * waveSpeed;

      for (const dot of dots) {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const distSq = dx * dx + dy * dy;

        const wave = Math.sin(dot.x * 0.02 + dot.y * 0.02 + time) * 0.5 + 0.5;
        const waveOpacity = dot.baseOpacity + wave * 0.15;
        const waveScale = 1 + wave * 0.2;

        let opacity = waveOpacity;
        let scale = waveScale;
        let r = baseRgb.r;
        let g = baseRgb.g;
        let b = baseRgb.b;
        let glow = 0;

        if (distSq < proxSq) {
          const dist = Math.sqrt(distSq);
          const t = 1 - dist / proximity;
          const easedT = t * t * (3 - 2 * t);

          r = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * easedT);
          g = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * easedT);
          b = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * easedT);

          opacity = Math.min(1, waveOpacity + easedT * 0.7);
          scale = waveScale + easedT * 0.8;
          glow = easedT * glowIntensity;
        }

        const radius = (dotSize / 2) * scale;

        if (glow > 0) {
          const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, radius * 4);
          gradient.addColorStop(0, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.4})`);
          gradient.addColorStop(0.5, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.1})`);
          gradient.addColorStop(1, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0)`);
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    buildGrid();
    animationId = requestAnimationFrame(draw);

    const handleResize = () => buildGrid();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [sectionRef]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
}
