'use strict';

import { error } from "@sveltejs/kit";
// import {search} from "$lib/server/anime_search"

import messages from "$lib/server/grpc/anime_search_pb.cjs";
import services from "$lib/server/grpc/anime_search_grpc_pb.cjs";
import grpc from "@grpc/grpc-js";
import logger from "$lib/server/logger";

const service_url = process.env.SEARCH_SERVICE_URL;
if (!service_url) {
    throw new Error('env SEARCH_SERVICE_URL is not set');
}



// const client = new services.AnimeSearchClient(
//     service_url,
//     grpc.credentials.createInsecure()
// );

/**
 * 
 * @param {string} keyword 
 * @param {string | null} rating 
 */
export async function search(keyword, rating) {
    
    logger.info(service_url);

    logger.info(keyword);
    logger.info(rating);
}


export async function load({url}) {
    const keyword = url.searchParams.get('keyword');
    let rating = url.searchParams.get('rating');

    if (!keyword || keyword.length > 50) {
        return error(400, 'bad request');
    }

    await search(keyword, rating);
}