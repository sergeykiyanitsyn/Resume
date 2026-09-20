import "./QualityField.css";
import { useEffect, useRef, useState } from "react";
import { createQualityField } from "./createQualityField";

export default function QualityField() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(preference.matches);
    preference.addEventListener("change", update);
    update();
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!canvas.current) return;
    return createQualityField(canvas.current, paused || reduced);
  }, [paused, reduced]);

  return (
    <div className="quality-field">
      <canvas
        ref={canvas}
        id="quality-field"
        aria-hidden="true"
        data-motion={paused || reduced ? "paused" : "playing"}
      />
      {!reduced && (
        <button
          className="motion-toggle"
          type="button"
          aria-label="Приостановить анимацию"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? "▶ Продолжить" : "Ⅱ Пауза"}
        </button>
      )}
    </div>
  );
}
