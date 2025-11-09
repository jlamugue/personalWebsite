import { defineConfig } from 'vite';

export default defineConfig({
	root: '.', // optional, your project root
	server: { port: 5173 }, // dev server options
	build: { outDir: 'dist' }, // build output folder
	resolve: {
		alias: {
			'@': '/src',
		},
	},
});
