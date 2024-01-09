import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
	base: './',
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	server: {
		cors:true,
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:8081',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
});
