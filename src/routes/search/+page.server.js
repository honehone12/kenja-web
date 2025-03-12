'use strict';

import { error } from "@sveltejs/kit";
import { Candidate, Rating } from "$lib/server/grpc/anime_search.js";
import log from "$lib/server/log.js";
import { grpcClient } from "$lib/server/grpc_client.js";
import { 
    BAD_REQUEST, STATUS_BAD_REQUEST, 
    INTERNAL_SERVER_ERROR, STATUS_INTERNAL_SERVER_ERROR 
} from "$lib/server/error.js";

/**
 * 
 * @param {AsyncIterable<Candidate>} stream 
 */
async function bufferStream(stream) {
    const candidates = [];
    for await (const candidate of stream) {
        candidates.push(candidate);
    }

    return candidates;
}

export async function load({url}) {
    if (!grpcClient.anime_search) {
        return error(STATUS_INTERNAL_SERVER_ERROR, INTERNAL_SERVER_ERROR);
    }
    
    const keyword = url.searchParams.get('keyword');
    if (!keyword || keyword.length > 50) {
        return error(STATUS_BAD_REQUEST, BAD_REQUEST);
    }
    const rating = url.searchParams.get('rating') 
        ? Rating.RATING_HENTAI : Rating.RATING_ALL_AGES;

    try {
        const stream = grpcClient.anime_search.search({
            keyword,
            rating
        });

        return {
            candidatesStream: bufferStream(stream)  
        };
    } catch (e) {
        log.error(e);
        return error(STATUS_INTERNAL_SERVER_ERROR, INTERNAL_SERVER_ERROR);
    }
}
