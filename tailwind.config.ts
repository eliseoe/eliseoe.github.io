import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        phase: {
          bg: "hsl(var(--phase-bg))",
          surface: "hsl(var(--phase-surface))",
          teal: "hsl(var(--phase-teal))",
          ghost: "hsl(var(--phase-ghost))",
          text: "hsl(var(--phase-text))",
          "text-dim": "hsl(var(--phase-text-dim))",
          warm: "hsl(var(--phase-warm))",
        },
        laminar: {
          steel: "hsl(var(--laminar-steel))",
          bg: "hsl(var(--laminar-bg))",
          line: "hsl(var(--laminar-line))",
          text: "hsl(var(--laminar-text))",
          "text-dim": "hsl(var(--laminar-text-dim))",
        },
        turbulent: {
          amber: "hsl(var(--turbulent-amber))",
          bg: "hsl(var(--turbulent-bg))",
          warm: "hsl(var(--turbulent-warm))",
          cream: "hsl(var(--turbulent-cream))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
