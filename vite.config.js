import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	optimizeDeps: {
		include: [
			'src/lib/server/grpc/anime_search_grpc_pb.cjs',
			'src/lib/server/grpc/anime_search_pb.cjs'
		]
	},
	ssr: {
		noExternal: [
			'src/lib/server/grpc/anime_search_grpc_pb.cjs',
			'src/lib/server/grpc/anime_search_pb.cjs'
		] 
	},
	build: {
		commonjsOptions: {
		  transformMixedEsModules: true
		}
	}
	
});
