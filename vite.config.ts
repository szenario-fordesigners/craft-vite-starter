import { defineConfig, loadEnv } from "vite";
import liveReload from "vite-plugin-live-reload";
import critical from "rollup-plugin-critical";
import tailwindcss from '@tailwindcss/vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '');

	// no sanity checks here. when PRIMARY_SITE_URL is missing, something is wrong.
	const primarySiteUrl = env.PRIMARY_SITE_URL.charAt(env.PRIMARY_SITE_URL.length - 1) === "/" ? env.PRIMARY_SITE_URL.slice(0, env.PRIMARY_SITE_URL.length - 1) : env.PRIMARY_SITE_URL;


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
			critical({
				criticalUrl: primarySiteUrl,
				criticalBase: "./web/dist/criticalcss/",
				// add any pages that should be pre-rendered here
				criticalPages: [{ uri: "/", template: "index" }],
				criticalConfig: {
					extract: true,
				},
			}),
		],
		resolve: {
            alias: {
              '@': path.resolve(import.meta.dirname, './src')
            },
            preserveSymlinks: true,
        },
	}
  })