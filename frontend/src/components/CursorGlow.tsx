import { useEffect } from "react";

/**
 * GPU-friendly cursor glow overlay.
 * - Uses CSS variables on :root to avoid React re-renders.
 * - Throttles pointer updates with requestAnimationFrame.
 * - Pointer-events disabled so it never blocks UI interactions.
 */
export function CursorGlow() {
  useEffect(() => {
    const root = document.documentElement;

    // Defaults
    root.style.setProperty("--cursor-x", "50vw");
    root.style.setProperty("--cursor-y", "50vh");
    root.style.setProperty("--cursor-active", "0");

    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const commit = () => {
      raf = 0;
      root.style.setProperty("--cursor-x", `${lastX}px`);
      root.style.setProperty("--cursor-y", `${lastY}px`);
      root.style.setProperty("--cursor-active", "1");
    };

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) raf = window.requestAnimationFrame(commit);
    };

    const onLeave = () => {
      root.style.setProperty("--cursor-active", "0");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("blur", onLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="cursor-glow pointer-events-none fixed inset-0 z-50"
    />
  );
}
