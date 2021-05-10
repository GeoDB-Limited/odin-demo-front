"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryRequestIDs = exports.QueryDataProvidersPoolResponse = exports.QueryDataProvidersPoolRequest = exports.QueryRequestPriceResponse = exports.QueryRequestPriceRequest = exports.QueryRequestSearchResponse = exports.QueryRequestSearchRequest = exports.QueryActiveValidatorsResponse = exports.QueryActiveValidatorsRequest = exports.QueryReportersResponse = exports.QueryReportersRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryRequestsResponse = exports.QueryRequestsRequest = exports.QueryRequestResponse = exports.QueryRequestRequest = exports.QueryRequestReportsResponse = exports.QueryRequestReportsRequest = exports.QueryOracleScriptsResponse = exports.QueryOracleScriptsRequest = exports.QueryOracleScriptResponse = exports.QueryOracleScriptRequest = exports.QueryDataSourcesResponse = exports.QueryDataSourcesRequest = exports.QueryDataSourceResponse = exports.QueryDataSourceRequest = exports.QueryDataResponse = exports.QueryDataRequest = exports.QueryCountsResponse = exports.QueryCountsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const oracle_1 = require("../../oracle/v1/oracle");
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("../../oracle/v1/params");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "oracle.v1";
const baseQueryCountsRequest = {};
exports.QueryCountsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCountsRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryCountsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryCountsRequest);
        return message;
    },
};
const baseQueryCountsResponse = {
    dataSourceCount: long_1.default.ZERO,
    oracleScriptCount: long_1.default.ZERO,
    requestCount: long_1.default.ZERO,
};
exports.QueryCountsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.dataSourceCount.isZero()) {
            writer.uint32(8).int64(message.dataSourceCount);
        }
        if (!message.oracleScriptCount.isZero()) {
            writer.uint32(16).int64(message.oracleScriptCount);
        }
        if (!message.requestCount.isZero()) {
            writer.uint32(24).int64(message.requestCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryCountsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceCount = reader.int64();
                    break;
                case 2:
                    message.oracleScriptCount = reader.int64();
                    break;
                case 3:
                    message.requestCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryCountsResponse);
        if (object.dataSourceCount !== undefined &&
            object.dataSourceCount !== null) {
            message.dataSourceCount = long_1.default.fromString(object.dataSourceCount);
        }
        else {
            message.dataSourceCount = long_1.default.ZERO;
        }
        if (object.oracleScriptCount !== undefined &&
            object.oracleScriptCount !== null) {
            message.oracleScriptCount = long_1.default.fromString(object.oracleScriptCount);
        }
        else {
            message.oracleScriptCount = long_1.default.ZERO;
        }
        if (object.requestCount !== undefined && object.requestCount !== null) {
            message.requestCount = long_1.default.fromString(object.requestCount);
        }
        else {
            message.requestCount = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataSourceCount !== undefined &&
            (obj.dataSourceCount = (message.dataSourceCount || long_1.default.ZERO).toString());
        message.oracleScriptCount !== undefined &&
            (obj.oracleScriptCount = (message.oracleScriptCount || long_1.default.ZERO).toString());
        message.requestCount !== undefined &&
            (obj.requestCount = (message.requestCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryCountsResponse);
        if (object.dataSourceCount !== undefined &&
            object.dataSourceCount !== null) {
            message.dataSourceCount = object.dataSourceCount;
        }
        else {
            message.dataSourceCount = long_1.default.ZERO;
        }
        if (object.oracleScriptCount !== undefined &&
            object.oracleScriptCount !== null) {
            message.oracleScriptCount = object.oracleScriptCount;
        }
        else {
            message.oracleScriptCount = long_1.default.ZERO;
        }
        if (object.requestCount !== undefined && object.requestCount !== null) {
            message.requestCount = object.requestCount;
        }
        else {
            message.requestCount = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryDataRequest = { dataHash: "" };
exports.QueryDataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataHash !== "") {
            writer.uint32(10).string(message.dataHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataRequest);
        if (object.dataHash !== undefined && object.dataHash !== null) {
            message.dataHash = String(object.dataHash);
        }
        else {
            message.dataHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataHash !== undefined && (obj.dataHash = message.dataHash);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataRequest);
        if (object.dataHash !== undefined && object.dataHash !== null) {
            message.dataHash = object.dataHash;
        }
        else {
            message.dataHash = "";
        }
        return message;
    },
};
const baseQueryDataResponse = {};
exports.QueryDataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataResponse);
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataResponse);
        message.data = new Uint8Array();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
const baseQueryDataSourceRequest = { dataSourceId: long_1.default.ZERO };
exports.QueryDataSourceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.dataSourceId.isZero()) {
            writer.uint32(8).int64(message.dataSourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataSourceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataSourceRequest);
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = long_1.default.fromString(object.dataSourceId);
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataSourceId !== undefined &&
            (obj.dataSourceId = (message.dataSourceId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataSourceRequest);
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = object.dataSourceId;
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryDataSourceResponse = {};
exports.QueryDataSourceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.dataSource !== undefined) {
            oracle_1.DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataSourceResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSource = oracle_1.DataSource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataSourceResponse);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = oracle_1.DataSource.fromJSON(object.dataSource);
        }
        else {
            message.dataSource = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.dataSource !== undefined &&
            (obj.dataSource = message.dataSource
                ? oracle_1.DataSource.toJSON(message.dataSource)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataSourceResponse);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = oracle_1.DataSource.fromPartial(object.dataSource);
        }
        else {
            message.dataSource = undefined;
        }
        return message;
    },
};
const baseQueryDataSourcesRequest = {};
exports.QueryDataSourcesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataSourcesRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataSourcesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataSourcesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryDataSourcesResponse = {};
exports.QueryDataSourcesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.dataSources) {
            oracle_1.DataSource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSources.push(oracle_1.DataSource.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        if (object.dataSources !== undefined && object.dataSources !== null) {
            for (const e of object.dataSources) {
                message.dataSources.push(oracle_1.DataSource.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.dataSources) {
            obj.dataSources = message.dataSources.map((e) => e ? oracle_1.DataSource.toJSON(e) : undefined);
        }
        else {
            obj.dataSources = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        if (object.dataSources !== undefined && object.dataSources !== null) {
            for (const e of object.dataSources) {
                message.dataSources.push(oracle_1.DataSource.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryOracleScriptRequest = { oracleScriptId: long_1.default.ZERO };
exports.QueryOracleScriptRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOracleScriptRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOracleScriptRequest);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOracleScriptRequest);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryOracleScriptResponse = {};
exports.QueryOracleScriptResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.oracleScript !== undefined) {
            oracle_1.OracleScript.encode(message.oracleScript, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOracleScriptResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScript = oracle_1.OracleScript.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOracleScriptResponse);
        if (object.oracleScript !== undefined && object.oracleScript !== null) {
            message.oracleScript = oracle_1.OracleScript.fromJSON(object.oracleScript);
        }
        else {
            message.oracleScript = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oracleScript !== undefined &&
            (obj.oracleScript = message.oracleScript
                ? oracle_1.OracleScript.toJSON(message.oracleScript)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOracleScriptResponse);
        if (object.oracleScript !== undefined && object.oracleScript !== null) {
            message.oracleScript = oracle_1.OracleScript.fromPartial(object.oracleScript);
        }
        else {
            message.oracleScript = undefined;
        }
        return message;
    },
};
const baseQueryOracleScriptsRequest = {};
exports.QueryOracleScriptsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOracleScriptsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOracleScriptsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOracleScriptsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryOracleScriptsResponse = {};
exports.QueryOracleScriptsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.oracleScripts) {
            oracle_1.OracleScript.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScripts.push(oracle_1.OracleScript.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        if (object.oracleScripts !== undefined && object.oracleScripts !== null) {
            for (const e of object.oracleScripts) {
                message.oracleScripts.push(oracle_1.OracleScript.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.oracleScripts) {
            obj.oracleScripts = message.oracleScripts.map((e) => e ? oracle_1.OracleScript.toJSON(e) : undefined);
        }
        else {
            obj.oracleScripts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        if (object.oracleScripts !== undefined && object.oracleScripts !== null) {
            for (const e of object.oracleScripts) {
                message.oracleScripts.push(oracle_1.OracleScript.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRequestReportsRequest = { requestId: long_1.default.ZERO };
exports.QueryRequestReportsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestReportsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestReportsRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestReportsRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRequestReportsResponse = {};
exports.QueryRequestReportsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.reports) {
            oracle_1.Report.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reports.push(oracle_1.Report.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        if (object.reports !== undefined && object.reports !== null) {
            for (const e of object.reports) {
                message.reports.push(oracle_1.Report.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.reports) {
            obj.reports = message.reports.map((e) => e ? oracle_1.Report.toJSON(e) : undefined);
        }
        else {
            obj.reports = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        if (object.reports !== undefined && object.reports !== null) {
            for (const e of object.reports) {
                message.reports.push(oracle_1.Report.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRequestRequest = { requestId: long_1.default.ZERO };
exports.QueryRequestRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryRequestResponse = {};
exports.QueryRequestResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.request !== undefined) {
            oracle_1.RequestResult.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request = oracle_1.RequestResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestResponse);
        if (object.request !== undefined && object.request !== null) {
            message.request = oracle_1.RequestResult.fromJSON(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.request !== undefined &&
            (obj.request = message.request
                ? oracle_1.RequestResult.toJSON(message.request)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestResponse);
        if (object.request !== undefined && object.request !== null) {
            message.request = oracle_1.RequestResult.fromPartial(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
};
const baseQueryRequestsRequest = {};
exports.QueryRequestsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryRequestsResponse = {};
exports.QueryRequestsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.requests) {
            oracle_1.RequestResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestsResponse);
        message.requests = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requests.push(oracle_1.RequestResult.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestsResponse);
        message.requests = [];
        if (object.requests !== undefined && object.requests !== null) {
            for (const e of object.requests) {
                message.requests.push(oracle_1.RequestResult.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.requests) {
            obj.requests = message.requests.map((e) => e ? oracle_1.RequestResult.toJSON(e) : undefined);
        }
        else {
            obj.requests = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestsResponse);
        message.requests = [];
        if (object.requests !== undefined && object.requests !== null) {
            for (const e of object.requests) {
                message.requests.push(oracle_1.RequestResult.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryValidatorRequest = { validatorAddress: "" };
exports.QueryValidatorRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
};
const baseQueryValidatorResponse = {};
exports.QueryValidatorResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== undefined) {
            oracle_1.ValidatorStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryValidatorResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = oracle_1.ValidatorStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryValidatorResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = oracle_1.ValidatorStatus.fromJSON(object.status);
        }
        else {
            message.status = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined &&
            (obj.status = message.status
                ? oracle_1.ValidatorStatus.toJSON(message.status)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryValidatorResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = oracle_1.ValidatorStatus.fromPartial(object.status);
        }
        else {
            message.status = undefined;
        }
        return message;
    },
};
const baseQueryReportersRequest = { validatorAddress: "" };
exports.QueryReportersRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryReportersRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryReportersRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryReportersRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = object.validatorAddress;
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
};
const baseQueryReportersResponse = { reporter: "" };
exports.QueryReportersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.reporter) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryReportersResponse);
        message.reporter = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reporter.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryReportersResponse);
        message.reporter = [];
        if (object.reporter !== undefined && object.reporter !== null) {
            for (const e of object.reporter) {
                message.reporter.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.reporter) {
            obj.reporter = message.reporter.map((e) => e);
        }
        else {
            obj.reporter = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryReportersResponse);
        message.reporter = [];
        if (object.reporter !== undefined && object.reporter !== null) {
            for (const e of object.reporter) {
                message.reporter.push(e);
            }
        }
        return message;
    },
};
const baseQueryActiveValidatorsRequest = {};
exports.QueryActiveValidatorsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryActiveValidatorsRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryActiveValidatorsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryActiveValidatorsRequest);
        return message;
    },
};
const baseQueryActiveValidatorsResponse = { count: long_1.default.ZERO };
exports.QueryActiveValidatorsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.count.isZero()) {
            writer.uint32(8).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryActiveValidatorsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryActiveValidatorsResponse);
        if (object.count !== undefined && object.count !== null) {
            message.count = long_1.default.fromString(object.count);
        }
        else {
            message.count = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined &&
            (obj.count = (message.count || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryActiveValidatorsResponse);
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryRequestSearchRequest = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestSearchRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestSearchRequest);
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                case 2:
                    message.calldata = reader.bytes();
                    break;
                case 3:
                    message.askCount = reader.int64();
                    break;
                case 4:
                    message.minCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestSearchRequest);
        message.calldata = new Uint8Array();
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = bytesFromBase64(object.calldata);
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = long_1.default.fromString(object.askCount);
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.ZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestSearchRequest);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = object.calldata;
        }
        else {
            message.calldata = new Uint8Array();
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = object.askCount;
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryRequestSearchResponse = {};
exports.QueryRequestSearchResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.requestPacketData !== undefined) {
            oracle_1.OracleRequestPacketData.encode(message.requestPacketData, writer.uint32(10).fork()).ldelim();
        }
        if (message.responsePacketData !== undefined) {
            oracle_1.OracleResponsePacketData.encode(message.responsePacketData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestSearchResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestPacketData = oracle_1.OracleRequestPacketData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.responsePacketData = oracle_1.OracleResponsePacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestSearchResponse);
        if (object.requestPacketData !== undefined &&
            object.requestPacketData !== null) {
            message.requestPacketData = oracle_1.OracleRequestPacketData.fromJSON(object.requestPacketData);
        }
        else {
            message.requestPacketData = undefined;
        }
        if (object.responsePacketData !== undefined &&
            object.responsePacketData !== null) {
            message.responsePacketData = oracle_1.OracleResponsePacketData.fromJSON(object.responsePacketData);
        }
        else {
            message.responsePacketData = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.requestPacketData !== undefined &&
            (obj.requestPacketData = message.requestPacketData
                ? oracle_1.OracleRequestPacketData.toJSON(message.requestPacketData)
                : undefined);
        message.responsePacketData !== undefined &&
            (obj.responsePacketData = message.responsePacketData
                ? oracle_1.OracleResponsePacketData.toJSON(message.responsePacketData)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestSearchResponse);
        if (object.requestPacketData !== undefined &&
            object.requestPacketData !== null) {
            message.requestPacketData = oracle_1.OracleRequestPacketData.fromPartial(object.requestPacketData);
        }
        else {
            message.requestPacketData = undefined;
        }
        if (object.responsePacketData !== undefined &&
            object.responsePacketData !== null) {
            message.responsePacketData = oracle_1.OracleResponsePacketData.fromPartial(object.responsePacketData);
        }
        else {
            message.responsePacketData = undefined;
        }
        return message;
    },
};
const baseQueryRequestPriceRequest = {
    symbol: "",
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestPriceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(16).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(24).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestPriceRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.askCount = reader.int64();
                    break;
                case 3:
                    message.minCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestPriceRequest);
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = long_1.default.fromString(object.askCount);
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.ZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestPriceRequest);
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = object.askCount;
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryRequestPriceResponse = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestPriceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestPriceResponse);
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                case 2:
                    message.calldata = reader.bytes();
                    break;
                case 3:
                    message.askCount = reader.int64();
                    break;
                case 4:
                    message.minCount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestPriceResponse);
        message.calldata = new Uint8Array();
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = bytesFromBase64(object.calldata);
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = long_1.default.fromString(object.askCount);
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.ZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestPriceResponse);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = object.calldata;
        }
        else {
            message.calldata = new Uint8Array();
        }
        if (object.askCount !== undefined && object.askCount !== null) {
            message.askCount = object.askCount;
        }
        else {
            message.askCount = long_1.default.ZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.ZERO;
        }
        return message;
    },
};
const baseQueryDataProvidersPoolRequest = {};
exports.QueryDataProvidersPoolRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataProvidersPoolRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryDataProvidersPoolRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryDataProvidersPoolRequest);
        return message;
    },
};
const baseQueryDataProvidersPoolResponse = {};
exports.QueryDataProvidersPoolResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (const e of object.pool) {
                message.pool.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map((e) => (e ? coin_1.DecCoin.toJSON(e) : undefined));
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (const e of object.pool) {
                message.pool.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryRequestIDs = { requestIds: long_1.default.ZERO };
exports.QueryRequestIDs = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.requestIds) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.requestIds.push(reader.int64());
                        }
                    }
                    else {
                        message.requestIds.push(reader.int64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        if (object.requestIds !== undefined && object.requestIds !== null) {
            for (const e of object.requestIds) {
                message.requestIds.push(long_1.default.fromString(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.requestIds) {
            obj.requestIds = message.requestIds.map((e) => (e || long_1.default.ZERO).toString());
        }
        else {
            obj.requestIds = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        if (object.requestIds !== undefined && object.requestIds !== null) {
            for (const e of object.requestIds) {
                message.requestIds.push(e);
            }
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Counts(request) {
        const data = exports.QueryCountsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Counts", data);
        return promise.then((data) => exports.QueryCountsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Data(request) {
        const data = exports.QueryDataRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Data", data);
        return promise.then((data) => exports.QueryDataResponse.decode(new minimal_1.default.Reader(data)));
    }
    DataSource(request) {
        const data = exports.QueryDataSourceRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "DataSource", data);
        return promise.then((data) => exports.QueryDataSourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    DataSources(request) {
        const data = exports.QueryDataSourcesRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "DataSources", data);
        return promise.then((data) => exports.QueryDataSourcesResponse.decode(new minimal_1.default.Reader(data)));
    }
    OracleScript(request) {
        const data = exports.QueryOracleScriptRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "OracleScript", data);
        return promise.then((data) => exports.QueryOracleScriptResponse.decode(new minimal_1.default.Reader(data)));
    }
    OracleScripts(request) {
        const data = exports.QueryOracleScriptsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "OracleScripts", data);
        return promise.then((data) => exports.QueryOracleScriptsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Request(request) {
        const data = exports.QueryRequestRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Request", data);
        return promise.then((data) => exports.QueryRequestResponse.decode(new minimal_1.default.Reader(data)));
    }
    Requests(request) {
        const data = exports.QueryRequestsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Requests", data);
        return promise.then((data) => exports.QueryRequestsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Validator(request) {
        const data = exports.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Validator", data);
        return promise.then((data) => exports.QueryValidatorResponse.decode(new minimal_1.default.Reader(data)));
    }
    Reporters(request) {
        const data = exports.QueryReportersRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Reporters", data);
        return promise.then((data) => exports.QueryReportersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ActiveValidators(request) {
        const data = exports.QueryActiveValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "ActiveValidators", data);
        return promise.then((data) => exports.QueryActiveValidatorsResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
    RequestSearch(request) {
        const data = exports.QueryRequestSearchRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "RequestSearch", data);
        return promise.then((data) => exports.QueryRequestSearchResponse.decode(new minimal_1.default.Reader(data)));
    }
    RequestPrice(request) {
        const data = exports.QueryRequestPriceRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "RequestPrice", data);
        return promise.then((data) => exports.QueryRequestPriceResponse.decode(new minimal_1.default.Reader(data)));
    }
    DataProvidersPool(request) {
        const data = exports.QueryDataProvidersPoolRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "DataProvidersPool", data);
        return promise.then((data) => exports.QueryDataProvidersPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    RequestReports(request) {
        const data = exports.QueryRequestReportsRequest.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Query", "RequestReports", data);
        return promise.then((data) => exports.QueryRequestReportsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
