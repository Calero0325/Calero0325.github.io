import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://Calero0325.github.io',
	// base: 'astro-photography-portfolio',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],
});
