/** Bounded 30 fps canvas loop. React owns lifetime; no React render per frame. */
export function createQualityField(
  canvas: HTMLCanvasElement,
  stopped: boolean,
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  let width = 0,
    height = 0,
    frame = 0,
    previous = 0,
    phase = 0;
  let visible = false;

  function draw() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);
    const radius = Math.min(width, height) * 0.48;
    for (let layer = 0; layer < 3; layer++) {
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate((layer * Math.PI) / 3 + phase * (layer % 2 ? -0.08 : 0.1));
      ctx.fillStyle = "#ff854a88";
      ctx.beginPath();
      for (let ring = 0; ring < 7; ring++) {
        const r = radius * (0.65 + ring * 0.055);
        for (let point = 0; point < 72; point++) {
          const t = (point / 72) * Math.PI * 2 + ring * 0.04;
          const x = Math.cos(t) * r,
            y = Math.sin(t) * r * 0.72;
          ctx.moveTo(x + 0.8, y);
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
        }
      }
      ctx.fill();
      ctx.restore();
    }
  }

  function tick(time: number) {
    if (!previous || time - previous >= 33) {
      phase += previous ? Math.min(time - previous, 80) / 1000 : 0;
      previous = time;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    cancelAnimationFrame(frame);
    previous = 0;
    if (!stopped && visible && !document.hidden)
      frame = requestAnimationFrame(tick);
  }

  const resize = new ResizeObserver(() => {
    ({ width, height } = canvas.getBoundingClientRect());
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  });
  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  resize.observe(canvas);
  intersection.observe(canvas);
  document.addEventListener("visibilitychange", sync);
  return () => {
    cancelAnimationFrame(frame);
    resize.disconnect();
    intersection.disconnect();
    document.removeEventListener("visibilitychange", sync);
  };
}
