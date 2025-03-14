// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.6.1
//   protoc               v3.19.1
// source: anime_search.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "kenja_anime_search";

export enum Rating {
  RATING_UNSPECIFIED = 0,
  RATING_ALL_AGES = 1,
  RATING_HENTAI = 2,
  UNRECOGNIZED = -1,
}

export function ratingFromJSON(object: any): Rating {
  switch (object) {
    case 0:
    case "RATING_UNSPECIFIED":
      return Rating.RATING_UNSPECIFIED;
    case 1:
    case "RATING_ALL_AGES":
      return Rating.RATING_ALL_AGES;
    case 2:
    case "RATING_HENTAI":
      return Rating.RATING_HENTAI;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Rating.UNRECOGNIZED;
  }
}

export function ratingToJSON(object: Rating): string {
  switch (object) {
    case Rating.RATING_UNSPECIFIED:
      return "RATING_UNSPECIFIED";
    case Rating.RATING_ALL_AGES:
      return "RATING_ALL_AGES";
    case Rating.RATING_HENTAI:
      return "RATING_HENTAI";
    case Rating.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Query {
  keyword: string;
  rating: Rating;
}

export interface Parent {
  name: string;
  nameJapanese?: string | undefined;
}

export interface Candidate {
  url: string;
  parent?: Parent | undefined;
  name: string;
  nameEnglish?: string | undefined;
  nameJapanese?: string | undefined;
}

function createBaseQuery(): Query {
  return { keyword: "", rating: 0 };
}

export const Query: MessageFns<Query> = {
  encode(message: Query, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.keyword !== "") {
      writer.uint32(10).string(message.keyword);
    }
    if (message.rating !== 0) {
      writer.uint32(16).int32(message.rating);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Query {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.keyword = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.rating = reader.int32() as any;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Query {
    return {
      keyword: isSet(object.keyword) ? globalThis.String(object.keyword) : "",
      rating: isSet(object.rating) ? ratingFromJSON(object.rating) : 0,
    };
  },

  toJSON(message: Query): unknown {
    const obj: any = {};
    if (message.keyword !== "") {
      obj.keyword = message.keyword;
    }
    if (message.rating !== 0) {
      obj.rating = ratingToJSON(message.rating);
    }
    return obj;
  },

  create(base?: DeepPartial<Query>): Query {
    return Query.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Query>): Query {
    const message = createBaseQuery();
    message.keyword = object.keyword ?? "";
    message.rating = object.rating ?? 0;
    return message;
  },
};

function createBaseParent(): Parent {
  return { name: "", nameJapanese: undefined };
}

export const Parent: MessageFns<Parent> = {
  encode(message: Parent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.nameJapanese !== undefined) {
      writer.uint32(18).string(message.nameJapanese);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Parent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.nameJapanese = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Parent {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      nameJapanese: isSet(object.nameJapanese) ? globalThis.String(object.nameJapanese) : undefined,
    };
  },

  toJSON(message: Parent): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.nameJapanese !== undefined) {
      obj.nameJapanese = message.nameJapanese;
    }
    return obj;
  },

  create(base?: DeepPartial<Parent>): Parent {
    return Parent.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Parent>): Parent {
    const message = createBaseParent();
    message.name = object.name ?? "";
    message.nameJapanese = object.nameJapanese ?? undefined;
    return message;
  },
};

function createBaseCandidate(): Candidate {
  return { url: "", parent: undefined, name: "", nameEnglish: undefined, nameJapanese: undefined };
}

export const Candidate: MessageFns<Candidate> = {
  encode(message: Candidate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    if (message.parent !== undefined) {
      Parent.encode(message.parent, writer.uint32(18).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.nameEnglish !== undefined) {
      writer.uint32(34).string(message.nameEnglish);
    }
    if (message.nameJapanese !== undefined) {
      writer.uint32(42).string(message.nameJapanese);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Candidate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandidate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.url = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.parent = Parent.decode(reader, reader.uint32());
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.nameEnglish = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.nameJapanese = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Candidate {
    return {
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      parent: isSet(object.parent) ? Parent.fromJSON(object.parent) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      nameEnglish: isSet(object.nameEnglish) ? globalThis.String(object.nameEnglish) : undefined,
      nameJapanese: isSet(object.nameJapanese) ? globalThis.String(object.nameJapanese) : undefined,
    };
  },

  toJSON(message: Candidate): unknown {
    const obj: any = {};
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.parent !== undefined) {
      obj.parent = Parent.toJSON(message.parent);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.nameEnglish !== undefined) {
      obj.nameEnglish = message.nameEnglish;
    }
    if (message.nameJapanese !== undefined) {
      obj.nameJapanese = message.nameJapanese;
    }
    return obj;
  },

  create(base?: DeepPartial<Candidate>): Candidate {
    return Candidate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Candidate>): Candidate {
    const message = createBaseCandidate();
    message.url = object.url ?? "";
    message.parent = (object.parent !== undefined && object.parent !== null)
      ? Parent.fromPartial(object.parent)
      : undefined;
    message.name = object.name ?? "";
    message.nameEnglish = object.nameEnglish ?? undefined;
    message.nameJapanese = object.nameJapanese ?? undefined;
    return message;
  },
};

export type AnimeSearchDefinition = typeof AnimeSearchDefinition;
export const AnimeSearchDefinition = {
  name: "AnimeSearch",
  fullName: "kenja_anime_search.AnimeSearch",
  methods: {
    search: {
      name: "Search",
      requestType: Query,
      requestStream: false,
      responseType: Candidate,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface AnimeSearchServiceImplementation<CallContextExt = {}> {
  search(request: Query, context: CallContext & CallContextExt): ServerStreamingMethodResult<DeepPartial<Candidate>>;
}

export interface AnimeSearchClient<CallOptionsExt = {}> {
  search(request: DeepPartial<Query>, options?: CallOptions & CallOptionsExt): AsyncIterable<Candidate>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
