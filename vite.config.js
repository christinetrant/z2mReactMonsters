import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/z2mReactMonsters/", // 👈 must be top-level, not inside build
	build: {
		// outDir: "build", // optional, defaults to "dist"
	},
});
