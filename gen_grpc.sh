#!/bin/bash

set -e

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:src/lib/server/grpc \
    --grpc_out=grpc_js:src/lib/server/grpc \
    --proto_path=../kenja-proto \
    ../kenja-proto/anime_search.proto 

for file in src/lib/server/grpc/*.js; do
    mv "$file" "${file%.js}.cjs"
done
