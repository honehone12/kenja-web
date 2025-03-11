// GENERATED CODE -- DO NOT EDIT!
//@ts-nocheck
'use strict';
var grpc = require('@grpc/grpc-js');
var anime_search_pb = require('./anime_search_pb.cjs');

function serialize_kenja_anime_search_Candidate(arg) {
  if (!(arg instanceof anime_search_pb.Candidate)) {
    throw new Error('Expected argument of type kenja_anime_search.Candidate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kenja_anime_search_Candidate(buffer_arg) {
  return anime_search_pb.Candidate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kenja_anime_search_Query(arg) {
  if (!(arg instanceof anime_search_pb.Query)) {
    throw new Error('Expected argument of type kenja_anime_search.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kenja_anime_search_Query(buffer_arg) {
  return anime_search_pb.Query.deserializeBinary(new Uint8Array(buffer_arg));
}


var AnimeSearchService = exports.AnimeSearchService = {
  search: {
    path: '/kenja_anime_search.AnimeSearch/Search',
    requestStream: false,
    responseStream: true,
    requestType: anime_search_pb.Query,
    responseType: anime_search_pb.Candidate,
    requestSerialize: serialize_kenja_anime_search_Query,
    requestDeserialize: deserialize_kenja_anime_search_Query,
    responseSerialize: serialize_kenja_anime_search_Candidate,
    responseDeserialize: deserialize_kenja_anime_search_Candidate,
  },
};

exports.AnimeSearchClient = grpc.makeGenericClientConstructor(AnimeSearchService, 'AnimeSearch');
