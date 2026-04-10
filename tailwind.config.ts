import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { primary: "#1e6f3f", mutedgreen: "#e9f5ee" } } }, plugins: [] };
export default config;
