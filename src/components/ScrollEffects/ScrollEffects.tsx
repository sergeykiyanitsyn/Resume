import { useEffect } from "react";
import "./ScrollEffects.css";

/** One observer for all reveal targets; unsupported browsers show normal content. */
export default function ScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    let observer: IntersectionObserver | undefined;

    const reset = () => {
      observer?.disconnect();
      observer = undefined;
      targets.forEach((target) => target.removeAttribute("data-reveal-state"));
    };

    const configure = () => {
      reset();
      if (preference.matches || !("IntersectionObserver" in window)) return;

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
        { threshold: 0, rootMargin: "0px 0px -24px 0px" },
      );
      observer = currentObserver;
      targets.forEach((target) => observer?.observe(target));
    };

    configure();
    preference.addEventListener("change", configure);

    return () => {
      preference.removeEventListener("change", configure);
      reset();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
