import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	return {
		// in dev, nginx proxies /vite-dev/ to this server (.ddev/nginx/vite-dev.conf),
		// so everything stays on the site's origin and survives `ddev share`.
		base: command === "serve" ? "/vite-dev/" : "/dist/",
		build: {
			emptyOutDir: true,
			manifest: true,
			outDir: "./web/dist/",
			rollupOptions: {
				input: {
					app: "./src/ts/app.ts",
				},
			},
		},
		server: {
			host: "0.0.0.0",
			port: 3000,
			// ponytail: hardcoded 443 because the proxy lands on https. drop the
			// clientPort if you ever serve the site over plain http.
			hmr: { clientPort: 443 },
		},
		plugins: [
			tailwindcss(),
			liveReload(["./templates/**/*"]),
		],
		resolve: {
            alias: {
              '@': path.resolve(import.meta.dirname, './src')
            },
            preserveSymlinks: true,
        },
	}
  })