import { useLayoutEffect, useRef } from "react";
import "./ScrollEffects.css";

/** One observer for all reveal targets; unsupported browsers show normal content. */
export default function ScrollEffects() {
  const progress = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;
    let resize: ResizeObserver | undefined;
    let frame = 0;
    let previousTime = 0;
    let displayedProgress = 0;
    let targetProgress = 0;

    const readProgress = () => {
      const root = document.documentElement;
      const distance = root.scrollHeight - root.clientHeight;
      return distance > 0
        ? Math.max(0, Math.min(1, window.scrollY / distance))
        : 0;
    };

    const paintProgress = () => {
      if (progress.current) {
        progress.current.style.transform = `scaleX(${displayedProgress})`;
      }
    };

    const tick = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      previousTime = time;
      displayedProgress +=
        (targetProgress - displayedProgress) * (1 - Math.exp(-elapsed / 140));
      if (Math.abs(targetProgress - displayedProgress) < 0.0001) {
        displayedProgress = targetProgress;
        frame = 0;
        previousTime = 0;
      } else {
        frame = requestAnimationFrame(tick);
      }
      paintProgress();
    };

    const updateProgress = () => {
      targetProgress = readProgress();
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const reset = () => {
      observer?.disconnect();
      observer = undefined;
      resize?.disconnect();
      resize = undefined;
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      targets.forEach((target) => target.removeAttribute("data-reveal-state"));
    };

    const configure = () => {
      reset();
      if (preference.matches) return;

      displayedProgress = targetProgress = readProgress();
      paintProgress();
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
      if ("ResizeObserver" in window) {
        resize = new ResizeObserver(updateProgress);
        resize.observe(document.body);
      }

      if (!("IntersectionObserver" in window)) return;

      const currentObserver = new IntersectionObserver(
        (entries) => {
          if (observer !== currentObserver) return;
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            target.dataset.revealState = "revealed";
            observer?.unobserve(target);
          });
        },
        { threshold: 0, rootMargin: "0px 0px 64px 0px" },
      );
      observer = currentObserver;
      targets.forEach((target) => {
        // Never hide content already on screen, including restored scroll positions.
        if (target.getBoundingClientRect().top < window.innerHeight) {
          target.dataset.revealState = "revealed";
        } else {
          target.dataset.revealState = "pending";
          observer?.observe(target);
        }
      });
    };

    configure();
    preference.addEventListener("change", configure);

    return () => {
      preference.removeEventListener("change", configure);
      reset();
    };
  }, []);

  return <div ref={progress} className="scroll-progress" aria-hidden="true" />;
}
