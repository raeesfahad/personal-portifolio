//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],
	
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
	}
};
export default config;