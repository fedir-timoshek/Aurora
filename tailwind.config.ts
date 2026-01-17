import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          950: "#0b0b14",
          900: "#0f1120",
          800: "#141833",
          700: "#1a2145"
        },
        neon: {
          300: "#7cf9ff",
          400: "#46e7ff",
          500: "#22c5ff",
          600: "#0893ff"
        },
        aurora: {
          300: "#9bffb7",
          400: "#63f0a0",
          500: "#2dd78f"
        },
        magma: {
          300: "#ff8bd1",
          400: "#ff5bb0",
          500: "#ff2f85"
        }
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 24px rgba(34, 197, 255, 0.25)",
        glowStrong: "0 0 40px rgba(34, 197, 255, 0.4)"
      },
      backgroundImage: {
        "aurora-grid":
          "radial-gradient(1200px 600px at 10% -10%, rgba(34,197,255,0.35), transparent 50%), radial-gradient(800px 600px at 90% -20%, rgba(99,240,160,0.35), transparent 50%), radial-gradient(900px 700px at 50% 0%, rgba(255,47,133,0.25), transparent 55%)"
      },
      keyframes: {
        "aurora-shift": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(12px)" },
          "100%": { transform: "translateY(0px)" }
        },
        "float-slow": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        }
      },
      animation: {
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
