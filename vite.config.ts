import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/WebCV2023/',
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
});
