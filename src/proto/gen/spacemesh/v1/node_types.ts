/* eslint-disable */
import Long from "long";
import { SimpleString, LayerNumber } from "./types";
import { Status } from "../../google/rpc/status";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "spacemesh.v1";

export enum LogLevel {
  LOG_LEVEL_UNSPECIFIED = 0,
  LOG_LEVEL_DEBUG = 1,
  LOG_LEVEL_INFO = 2,
  LOG_LEVEL_WARN = 3,
  LOG_LEVEL_ERROR = 4,
  LOG_LEVEL_DPANIC = 5,
  LOG_LEVEL_PANIC = 6,
  LOG_LEVEL_FATAL = 7,
  UNRECOGNIZED = -1,
}

export function logLevelFromJSON(object: any): LogLevel {
  switch (object) {
    case 0:
    case "LOG_LEVEL_UNSPECIFIED":
      return LogLevel.LOG_LEVEL_UNSPECIFIED;
    case 1:
    case "LOG_LEVEL_DEBUG":
      return LogLevel.LOG_LEVEL_DEBUG;
    case 2:
    case "LOG_LEVEL_INFO":
      return LogLevel.LOG_LEVEL_INFO;
    case 3:
    case "LOG_LEVEL_WARN":
      return LogLevel.LOG_LEVEL_WARN;
    case 4:
    case "LOG_LEVEL_ERROR":
      return LogLevel.LOG_LEVEL_ERROR;
    case 5:
    case "LOG_LEVEL_DPANIC":
      return LogLevel.LOG_LEVEL_DPANIC;
    case 6:
    case "LOG_LEVEL_PANIC":
      return LogLevel.LOG_LEVEL_PANIC;
    case 7:
    case "LOG_LEVEL_FATAL":
      return LogLevel.LOG_LEVEL_FATAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LogLevel.UNRECOGNIZED;
  }
}

export function logLevelToJSON(object: LogLevel): string {
  switch (object) {
    case LogLevel.LOG_LEVEL_UNSPECIFIED:
      return "LOG_LEVEL_UNSPECIFIED";
    case LogLevel.LOG_LEVEL_DEBUG:
      return "LOG_LEVEL_DEBUG";
    case LogLevel.LOG_LEVEL_INFO:
      return "LOG_LEVEL_INFO";
    case LogLevel.LOG_LEVEL_WARN:
      return "LOG_LEVEL_WARN";
    case LogLevel.LOG_LEVEL_ERROR:
      return "LOG_LEVEL_ERROR";
    case LogLevel.LOG_LEVEL_DPANIC:
      return "LOG_LEVEL_DPANIC";
    case LogLevel.LOG_LEVEL_PANIC:
      return "LOG_LEVEL_PANIC";
    case LogLevel.LOG_LEVEL_FATAL:
      return "LOG_LEVEL_FATAL";
    case LogLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface EchoRequest {
  msg: SimpleString | undefined;
}

export interface EchoResponse {
  msg: SimpleString | undefined;
}

export interface VersionResponse {
  versionString: SimpleString | undefined;
}

export interface BuildResponse {
  buildString: SimpleString | undefined;
}

export interface SyncStartRequest {}

export interface SyncStartResponse {
  status: Status | undefined;
}

export interface ShutdownRequest {}

export interface ShutdownResponse {
  status: Status | undefined;
}

/** current node status */
export interface NodeStatus {
  /** number of connected neighbors */
  connectedPeers: number;
  /** true when meshed is synced */
  isSynced: boolean;
  /** the last layer node has synced */
  syncedLayer: LayerNumber | undefined;
  /** top layer is the tip */
  topLayer: LayerNumber | undefined;
  /** the last layer node has verified */
  verifiedLayer: LayerNumber | undefined;
}

export interface StatusRequest {}

export interface StatusResponse {
  status: NodeStatus | undefined;
}

export interface UpdatePoetServerRequest {
  url: string;
}

export interface UpdatePoetServerResponse {
  status: Status | undefined;
}

export interface StatusStreamRequest {}

export interface StatusStreamResponse {
  status: NodeStatus | undefined;
}

export interface NodeError {
  level: LogLevel;
  module: string;
  msg: string;
  stackTrace: string;
}

export interface ErrorStreamRequest {}

export interface ErrorStreamResponse {
  error: NodeError | undefined;
}

function createBaseEchoRequest(): EchoRequest {
  return { msg: undefined };
}

export const EchoRequest = {
  encode(
    message: EchoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== undefined) {
      SimpleString.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = SimpleString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoRequest {
    return {
      msg: isSet(object.msg) ? SimpleString.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: EchoRequest): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? SimpleString.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EchoRequest>): EchoRequest {
    const message = createBaseEchoRequest();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SimpleString.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

function createBaseEchoResponse(): EchoResponse {
  return { msg: undefined };
}

export const EchoResponse = {
  encode(
    message: EchoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.msg !== undefined) {
      SimpleString.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = SimpleString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoResponse {
    return {
      msg: isSet(object.msg) ? SimpleString.fromJSON(object.msg) : undefined,
    };
  },

  toJSON(message: EchoResponse): unknown {
    const obj: any = {};
    message.msg !== undefined &&
      (obj.msg = message.msg ? SimpleString.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EchoResponse>): EchoResponse {
    const message = createBaseEchoResponse();
    message.msg =
      object.msg !== undefined && object.msg !== null
        ? SimpleString.fromPartial(object.msg)
        : undefined;
    return message;
  },
};

function createBaseVersionResponse(): VersionResponse {
  return { versionString: undefined };
}

export const VersionResponse = {
  encode(
    message: VersionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.versionString !== undefined) {
      SimpleString.encode(
        message.versionString,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versionString = SimpleString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VersionResponse {
    return {
      versionString: isSet(object.versionString)
        ? SimpleString.fromJSON(object.versionString)
        : undefined,
    };
  },

  toJSON(message: VersionResponse): unknown {
    const obj: any = {};
    message.versionString !== undefined &&
      (obj.versionString = message.versionString
        ? SimpleString.toJSON(message.versionString)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VersionResponse>): VersionResponse {
    const message = createBaseVersionResponse();
    message.versionString =
      object.versionString !== undefined && object.versionString !== null
        ? SimpleString.fromPartial(object.versionString)
        : undefined;
    return message;
  },
};

function createBaseBuildResponse(): BuildResponse {
  return { buildString: undefined };
}

export const BuildResponse = {
  encode(
    message: BuildResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.buildString !== undefined) {
      SimpleString.encode(
        message.buildString,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buildString = SimpleString.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildResponse {
    return {
      buildString: isSet(object.buildString)
        ? SimpleString.fromJSON(object.buildString)
        : undefined,
    };
  },

  toJSON(message: BuildResponse): unknown {
    const obj: any = {};
    message.buildString !== undefined &&
      (obj.buildString = message.buildString
        ? SimpleString.toJSON(message.buildString)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BuildResponse>): BuildResponse {
    const message = createBaseBuildResponse();
    message.buildString =
      object.buildString !== undefined && object.buildString !== null
        ? SimpleString.fromPartial(object.buildString)
        : undefined;
    return message;
  },
};

function createBaseSyncStartRequest(): SyncStartRequest {
  return {};
}

export const SyncStartRequest = {
  encode(
    _: SyncStartRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncStartRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncStartRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SyncStartRequest {
    return {};
  },

  toJSON(_: SyncStartRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SyncStartRequest>): SyncStartRequest {
    const message = createBaseSyncStartRequest();
    return message;
  },
};

function createBaseSyncStartResponse(): SyncStartResponse {
  return { status: undefined };
}

export const SyncStartResponse = {
  encode(
    message: SyncStartResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyncStartResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyncStartResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SyncStartResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: SyncStartResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SyncStartResponse>): SyncStartResponse {
    const message = createBaseSyncStartResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseShutdownRequest(): ShutdownRequest {
  return {};
}

export const ShutdownRequest = {
  encode(
    _: ShutdownRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShutdownRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShutdownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ShutdownRequest {
    return {};
  },

  toJSON(_: ShutdownRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ShutdownRequest>): ShutdownRequest {
    const message = createBaseShutdownRequest();
    return message;
  },
};

function createBaseShutdownResponse(): ShutdownResponse {
  return { status: undefined };
}

export const ShutdownResponse = {
  encode(
    message: ShutdownResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShutdownResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShutdownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShutdownResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: ShutdownResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ShutdownResponse>): ShutdownResponse {
    const message = createBaseShutdownResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseNodeStatus(): NodeStatus {
  return {
    connectedPeers: 0,
    isSynced: false,
    syncedLayer: undefined,
    topLayer: undefined,
    verifiedLayer: undefined,
  };
}

export const NodeStatus = {
  encode(
    message: NodeStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectedPeers !== 0) {
      writer.uint32(8).uint64(message.connectedPeers);
    }
    if (message.isSynced === true) {
      writer.uint32(16).bool(message.isSynced);
    }
    if (message.syncedLayer !== undefined) {
      LayerNumber.encode(
        message.syncedLayer,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.topLayer !== undefined) {
      LayerNumber.encode(message.topLayer, writer.uint32(34).fork()).ldelim();
    }
    if (message.verifiedLayer !== undefined) {
      LayerNumber.encode(
        message.verifiedLayer,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectedPeers = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.isSynced = reader.bool();
          break;
        case 3:
          message.syncedLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 4:
          message.topLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        case 5:
          message.verifiedLayer = LayerNumber.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeStatus {
    return {
      connectedPeers: isSet(object.connectedPeers)
        ? Number(object.connectedPeers)
        : 0,
      isSynced: isSet(object.isSynced) ? Boolean(object.isSynced) : false,
      syncedLayer: isSet(object.syncedLayer)
        ? LayerNumber.fromJSON(object.syncedLayer)
        : undefined,
      topLayer: isSet(object.topLayer)
        ? LayerNumber.fromJSON(object.topLayer)
        : undefined,
      verifiedLayer: isSet(object.verifiedLayer)
        ? LayerNumber.fromJSON(object.verifiedLayer)
        : undefined,
    };
  },

  toJSON(message: NodeStatus): unknown {
    const obj: any = {};
    message.connectedPeers !== undefined &&
      (obj.connectedPeers = Math.round(message.connectedPeers));
    message.isSynced !== undefined && (obj.isSynced = message.isSynced);
    message.syncedLayer !== undefined &&
      (obj.syncedLayer = message.syncedLayer
        ? LayerNumber.toJSON(message.syncedLayer)
        : undefined);
    message.topLayer !== undefined &&
      (obj.topLayer = message.topLayer
        ? LayerNumber.toJSON(message.topLayer)
        : undefined);
    message.verifiedLayer !== undefined &&
      (obj.verifiedLayer = message.verifiedLayer
        ? LayerNumber.toJSON(message.verifiedLayer)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<NodeStatus>): NodeStatus {
    const message = createBaseNodeStatus();
    message.connectedPeers = object.connectedPeers ?? 0;
    message.isSynced = object.isSynced ?? false;
    message.syncedLayer =
      object.syncedLayer !== undefined && object.syncedLayer !== null
        ? LayerNumber.fromPartial(object.syncedLayer)
        : undefined;
    message.topLayer =
      object.topLayer !== undefined && object.topLayer !== null
        ? LayerNumber.fromPartial(object.topLayer)
        : undefined;
    message.verifiedLayer =
      object.verifiedLayer !== undefined && object.verifiedLayer !== null
        ? LayerNumber.fromPartial(object.verifiedLayer)
        : undefined;
    return message;
  },
};

function createBaseStatusRequest(): StatusRequest {
  return {};
}

export const StatusRequest = {
  encode(
    _: StatusRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StatusRequest {
    return {};
  },

  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
};

function createBaseStatusResponse(): StatusResponse {
  return { status: undefined };
}

export const StatusResponse = {
  encode(
    message: StatusResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      NodeStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = NodeStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatusResponse {
    return {
      status: isSet(object.status)
        ? NodeStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status
        ? NodeStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? NodeStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseUpdatePoetServerRequest(): UpdatePoetServerRequest {
  return { url: "" };
}

export const UpdatePoetServerRequest = {
  encode(
    message: UpdatePoetServerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePoetServerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoetServerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoetServerRequest {
    return {
      url: isSet(object.url) ? String(object.url) : "",
    };
  },

  toJSON(message: UpdatePoetServerRequest): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePoetServerRequest>
  ): UpdatePoetServerRequest {
    const message = createBaseUpdatePoetServerRequest();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseUpdatePoetServerResponse(): UpdatePoetServerResponse {
  return { status: undefined };
}

export const UpdatePoetServerResponse = {
  encode(
    message: UpdatePoetServerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      Status.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdatePoetServerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoetServerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoetServerResponse {
    return {
      status: isSet(object.status) ? Status.fromJSON(object.status) : undefined,
    };
  },

  toJSON(message: UpdatePoetServerResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status ? Status.toJSON(message.status) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<UpdatePoetServerResponse>
  ): UpdatePoetServerResponse {
    const message = createBaseUpdatePoetServerResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? Status.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseStatusStreamRequest(): StatusStreamRequest {
  return {};
}

export const StatusStreamRequest = {
  encode(
    _: StatusStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): StatusStreamRequest {
    return {};
  },

  toJSON(_: StatusStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StatusStreamRequest>): StatusStreamRequest {
    const message = createBaseStatusStreamRequest();
    return message;
  },
};

function createBaseStatusStreamResponse(): StatusStreamResponse {
  return { status: undefined };
}

export const StatusStreamResponse = {
  encode(
    message: StatusStreamResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== undefined) {
      NodeStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StatusStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = NodeStatus.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StatusStreamResponse {
    return {
      status: isSet(object.status)
        ? NodeStatus.fromJSON(object.status)
        : undefined,
    };
  },

  toJSON(message: StatusStreamResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = message.status
        ? NodeStatus.toJSON(message.status)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StatusStreamResponse>): StatusStreamResponse {
    const message = createBaseStatusStreamResponse();
    message.status =
      object.status !== undefined && object.status !== null
        ? NodeStatus.fromPartial(object.status)
        : undefined;
    return message;
  },
};

function createBaseNodeError(): NodeError {
  return { level: 0, module: "", msg: "", stackTrace: "" };
}

export const NodeError = {
  encode(
    message: NodeError,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.level !== 0) {
      writer.uint32(8).int32(message.level);
    }
    if (message.module !== "") {
      writer.uint32(18).string(message.module);
    }
    if (message.msg !== "") {
      writer.uint32(26).string(message.msg);
    }
    if (message.stackTrace !== "") {
      writer.uint32(34).string(message.stackTrace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.int32() as any;
          break;
        case 2:
          message.module = reader.string();
          break;
        case 3:
          message.msg = reader.string();
          break;
        case 4:
          message.stackTrace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NodeError {
    return {
      level: isSet(object.level) ? logLevelFromJSON(object.level) : 0,
      module: isSet(object.module) ? String(object.module) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      stackTrace: isSet(object.stackTrace) ? String(object.stackTrace) : "",
    };
  },

  toJSON(message: NodeError): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = logLevelToJSON(message.level));
    message.module !== undefined && (obj.module = message.module);
    message.msg !== undefined && (obj.msg = message.msg);
    message.stackTrace !== undefined && (obj.stackTrace = message.stackTrace);
    return obj;
  },

  fromPartial(object: DeepPartial<NodeError>): NodeError {
    const message = createBaseNodeError();
    message.level = object.level ?? 0;
    message.module = object.module ?? "";
    message.msg = object.msg ?? "";
    message.stackTrace = object.stackTrace ?? "";
    return message;
  },
};

function createBaseErrorStreamRequest(): ErrorStreamRequest {
  return {};
}

export const ErrorStreamRequest = {
  encode(
    _: ErrorStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ErrorStreamRequest {
    return {};
  },

  toJSON(_: ErrorStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ErrorStreamRequest>): ErrorStreamRequest {
    const message = createBaseErrorStreamRequest();
    return message;
  },
};

function createBaseErrorStreamResponse(): ErrorStreamResponse {
  return { error: undefined };
}

export const ErrorStreamResponse = {
  encode(
    message: ErrorStreamResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== undefined) {
      NodeError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = NodeError.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ErrorStreamResponse {
    return {
      error: isSet(object.error) ? NodeError.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: ErrorStreamResponse): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = message.error ? NodeError.toJSON(message.error) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ErrorStreamResponse>): ErrorStreamResponse {
    const message = createBaseErrorStreamResponse();
    message.error =
      object.error !== undefined && object.error !== null
        ? NodeError.fromPartial(object.error)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}