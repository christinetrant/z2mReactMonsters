import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		base: "/z2mReactMonsters/",
		outDir: "build", // CRA's default build output
	},
});
