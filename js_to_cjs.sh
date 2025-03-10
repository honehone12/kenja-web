for file in src/lib/server/*.js; do
    mv "$file" "${file%.js}.cjs"
done
