'use strict';

import { building } from "$app/environment";
import { env } from "$env/dynamic/private";
import { createChannel, createClient } from "nice-grpc";
import { AnimeSearchDefinition } from "./grpc/anime_search.js";

/**
 * @type {{
 *  animeSearch: import("./grpc/anime_search").AnimeSearchClient | null
 * }}
 */
export const grpcClient = {
    animeSearch: null
};

if (!building) {
    const search_service_url = env.SEARCH_SERVICE_URL;
    if (!search_service_url) {
        throw new Error('env SEARCH_SERVICE_URL is not set');
    }

    const channel = createChannel(search_service_url);
    grpcClient.animeSearch = createClient(AnimeSearchDefinition, channel);
}
