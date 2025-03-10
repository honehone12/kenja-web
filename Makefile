.PHONY:

protoc:
	./node_modules/.bin/grpc_tools_node_protoc \
	--js_out=import_style=commonjs,binary:src/lib/server \
	--proto_path=../kenja-proto \
	../kenja-proto/anime_search.proto 

	./js_to_cjs.sh
