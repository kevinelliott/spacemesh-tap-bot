/* eslint-disable */
import { Account } from "./global_state_types";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "spacemesh.v1";

export interface AccountsResponse {
  accountWrapper: Account[];
}

function createBaseAccountsResponse(): AccountsResponse {
  return { accountWrapper: [] };
}

export const AccountsResponse = {
  encode(
    message: AccountsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accountWrapper) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountWrapper.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsResponse {
    return {
      accountWrapper: Array.isArray(object?.accountWrapper)
        ? object.accountWrapper.map((e: any) => Account.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountsResponse): unknown {
    const obj: any = {};
    if (message.accountWrapper) {
      obj.accountWrapper = message.accountWrapper.map((e) =>
        e ? Account.toJSON(e) : undefined
      );
    } else {
      obj.accountWrapper = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AccountsResponse>): AccountsResponse {
    const message = createBaseAccountsResponse();
    message.accountWrapper =
      object.accountWrapper?.map((e) => Account.fromPartial(e)) || [];
    return message;
  },
};

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