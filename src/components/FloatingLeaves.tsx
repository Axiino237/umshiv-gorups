import { useMemo } from "react";

export function FloatingLeaves({ count = 14 }: { count?: number }) {
  const leaves = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 90 + 5, // Keep away from edges
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 14,
        size: 8 + Math.random() * 14,
        tx: (Math.random() - 0.5) * 100, // Reduced horizontal drift
        gold: Math.random() > 0.6,
      })),
    [count],
  );
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-0">
      {leaves.map((l) => (
        <svg
          key={l.id}
          width={l.size}
          height={l.size}
          viewBox="0 0 24 24"
          className="absolute -top-10"
          style={{
            left: `${l.left}%`,
            animation: `float-leaf ${l.duration}s linear ${l.delay}s infinite`,
            // @ts-expect-error css var
            "--tx": `${l.tx}px`,
            willChange: "transform",
          }}
        >
          <path
            d="M12 2c5 4 8 8 8 12 0 4-3 8-8 8s-8-4-8-8c0-4 3-8 8-12z"
            fill={l.gold ? "oklch(0.78 0.13 85)" : "oklch(0.45 0.11 145)"}
            opacity="0.55"
          />
          <path d="M12 2v20" stroke="oklch(0.18 0.04 145)" strokeWidth="0.6" />
        </svg>
      ))}
    </div>
  );
}
