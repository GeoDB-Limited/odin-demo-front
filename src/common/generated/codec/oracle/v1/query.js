"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryRequestIDs = exports.QueryDataProvidersPoolResponse = exports.QueryDataProvidersPoolRequest = exports.QueryRequestPriceResponse = exports.QueryRequestPriceRequest = exports.QueryRequestSearchResponse = exports.QueryRequestSearchRequest = exports.QueryActiveValidatorsResponse = exports.QueryActiveValidatorsRequest = exports.QueryReportersResponse = exports.QueryReportersRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryRequestsResponse = exports.QueryRequestsRequest = exports.QueryRequestResponse = exports.QueryRequestRequest = exports.QueryRequestReportsResponse = exports.QueryRequestReportsRequest = exports.QueryOracleScriptsResponse = exports.QueryOracleScriptsRequest = exports.QueryOracleScriptResponse = exports.QueryOracleScriptRequest = exports.QueryDataSourcesResponse = exports.QueryDataSourcesRequest = exports.QueryDataSourceResponse = exports.QueryDataSourceRequest = exports.QueryDataResponse = exports.QueryDataRequest = exports.QueryCountsResponse = exports.QueryCountsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var oracle_1 = require("../../oracle/v1/oracle");
var pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
var params_1 = require("../../oracle/v1/params");
var coin_1 = require("../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "oracle.v1";
var baseQueryCountsRequest = {};
exports.QueryCountsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryCountsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseQueryCountsRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseQueryCountsRequest);
        return message;
    },
};
var baseQueryCountsResponse = {
    dataSourceCount: long_1.default.ZERO,
    oracleScriptCount: long_1.default.ZERO,
    requestCount: long_1.default.ZERO,
};
exports.QueryCountsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryCountsResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryCountsResponse);
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
    toJSON: function (message) {
        var obj = {};
        message.dataSourceCount !== undefined &&
            (obj.dataSourceCount = (message.dataSourceCount || long_1.default.ZERO).toString());
        message.oracleScriptCount !== undefined &&
            (obj.oracleScriptCount = (message.oracleScriptCount || long_1.default.ZERO).toString());
        message.requestCount !== undefined &&
            (obj.requestCount = (message.requestCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryCountsResponse);
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
var baseQueryDataRequest = { dataHash: "" };
exports.QueryDataRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.dataHash !== "") {
            writer.uint32(10).string(message.dataHash);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataRequest);
        if (object.dataHash !== undefined && object.dataHash !== null) {
            message.dataHash = String(object.dataHash);
        }
        else {
            message.dataHash = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.dataHash !== undefined && (obj.dataHash = message.dataHash);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataRequest);
        if (object.dataHash !== undefined && object.dataHash !== null) {
            message.dataHash = object.dataHash;
        }
        else {
            message.dataHash = "";
        }
        return message;
    },
};
var baseQueryDataResponse = {};
exports.QueryDataResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataResponse);
        message.data = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataResponse);
        message.data = new Uint8Array();
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataResponse);
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
var baseQueryDataSourceRequest = { dataSourceId: long_1.default.ZERO };
exports.QueryDataSourceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.dataSourceId.isZero()) {
            writer.uint32(8).int64(message.dataSourceId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataSourceRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataSourceRequest);
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = long_1.default.fromString(object.dataSourceId);
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.dataSourceId !== undefined &&
            (obj.dataSourceId = (message.dataSourceId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataSourceRequest);
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = object.dataSourceId;
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        return message;
    },
};
var baseQueryDataSourceResponse = {};
exports.QueryDataSourceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.dataSource !== undefined) {
            oracle_1.DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataSourceResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataSourceResponse);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = oracle_1.DataSource.fromJSON(object.dataSource);
        }
        else {
            message.dataSource = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.dataSource !== undefined &&
            (obj.dataSource = message.dataSource
                ? oracle_1.DataSource.toJSON(message.dataSource)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataSourceResponse);
        if (object.dataSource !== undefined && object.dataSource !== null) {
            message.dataSource = oracle_1.DataSource.fromPartial(object.dataSource);
        }
        else {
            message.dataSource = undefined;
        }
        return message;
    },
};
var baseQueryDataSourcesRequest = {};
exports.QueryDataSourcesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataSourcesRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataSourcesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataSourcesRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryDataSourcesResponse = {};
exports.QueryDataSourcesResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.dataSources; _i < _a.length; _i++) {
            var v = _a[_i];
            oracle_1.DataSource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        if (object.dataSources !== undefined && object.dataSources !== null) {
            for (var _i = 0, _a = object.dataSources; _i < _a.length; _i++) {
                var e = _a[_i];
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
    toJSON: function (message) {
        var obj = {};
        if (message.dataSources) {
            obj.dataSources = message.dataSources.map(function (e) {
                return e ? oracle_1.DataSource.toJSON(e) : undefined;
            });
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataSourcesResponse);
        message.dataSources = [];
        if (object.dataSources !== undefined && object.dataSources !== null) {
            for (var _i = 0, _a = object.dataSources; _i < _a.length; _i++) {
                var e = _a[_i];
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
var baseQueryOracleScriptRequest = { oracleScriptId: long_1.default.ZERO };
exports.QueryOracleScriptRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryOracleScriptRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryOracleScriptRequest);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryOracleScriptRequest);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        return message;
    },
};
var baseQueryOracleScriptResponse = {};
exports.QueryOracleScriptResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.oracleScript !== undefined) {
            oracle_1.OracleScript.encode(message.oracleScript, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryOracleScriptResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryOracleScriptResponse);
        if (object.oracleScript !== undefined && object.oracleScript !== null) {
            message.oracleScript = oracle_1.OracleScript.fromJSON(object.oracleScript);
        }
        else {
            message.oracleScript = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.oracleScript !== undefined &&
            (obj.oracleScript = message.oracleScript
                ? oracle_1.OracleScript.toJSON(message.oracleScript)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryOracleScriptResponse);
        if (object.oracleScript !== undefined && object.oracleScript !== null) {
            message.oracleScript = oracle_1.OracleScript.fromPartial(object.oracleScript);
        }
        else {
            message.oracleScript = undefined;
        }
        return message;
    },
};
var baseQueryOracleScriptsRequest = {};
exports.QueryOracleScriptsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryOracleScriptsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryOracleScriptsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryOracleScriptsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryOracleScriptsResponse = {};
exports.QueryOracleScriptsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.oracleScripts; _i < _a.length; _i++) {
            var v = _a[_i];
            oracle_1.OracleScript.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        if (object.oracleScripts !== undefined && object.oracleScripts !== null) {
            for (var _i = 0, _a = object.oracleScripts; _i < _a.length; _i++) {
                var e = _a[_i];
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
    toJSON: function (message) {
        var obj = {};
        if (message.oracleScripts) {
            obj.oracleScripts = message.oracleScripts.map(function (e) {
                return e ? oracle_1.OracleScript.toJSON(e) : undefined;
            });
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryOracleScriptsResponse);
        message.oracleScripts = [];
        if (object.oracleScripts !== undefined && object.oracleScripts !== null) {
            for (var _i = 0, _a = object.oracleScripts; _i < _a.length; _i++) {
                var e = _a[_i];
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
var baseQueryRequestReportsRequest = { requestId: long_1.default.ZERO };
exports.QueryRequestReportsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestReportsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestReportsRequest);
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
    toJSON: function (message) {
        var obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestReportsRequest);
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
var baseQueryRequestReportsResponse = {};
exports.QueryRequestReportsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.reports; _i < _a.length; _i++) {
            var v = _a[_i];
            oracle_1.Report.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        if (object.reports !== undefined && object.reports !== null) {
            for (var _i = 0, _a = object.reports; _i < _a.length; _i++) {
                var e = _a[_i];
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
    toJSON: function (message) {
        var obj = {};
        if (message.reports) {
            obj.reports = message.reports.map(function (e) {
                return e ? oracle_1.Report.toJSON(e) : undefined;
            });
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestReportsResponse);
        message.reports = [];
        if (object.reports !== undefined && object.reports !== null) {
            for (var _i = 0, _a = object.reports; _i < _a.length; _i++) {
                var e = _a[_i];
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
var baseQueryRequestRequest = { requestId: long_1.default.ZERO };
exports.QueryRequestRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestRequest);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        return message;
    },
};
var baseQueryRequestResponse = {};
exports.QueryRequestResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.request !== undefined) {
            oracle_1.RequestResult.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestResponse);
        if (object.request !== undefined && object.request !== null) {
            message.request = oracle_1.RequestResult.fromJSON(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.request !== undefined &&
            (obj.request = message.request
                ? oracle_1.RequestResult.toJSON(message.request)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestResponse);
        if (object.request !== undefined && object.request !== null) {
            message.request = oracle_1.RequestResult.fromPartial(object.request);
        }
        else {
            message.request = undefined;
        }
        return message;
    },
};
var baseQueryRequestsRequest = {};
exports.QueryRequestsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestsRequest);
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
var baseQueryRequestsResponse = {};
exports.QueryRequestsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.requests; _i < _a.length; _i++) {
            var v = _a[_i];
            oracle_1.RequestResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestsResponse);
        message.requests = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestsResponse);
        message.requests = [];
        if (object.requests !== undefined && object.requests !== null) {
            for (var _i = 0, _a = object.requests; _i < _a.length; _i++) {
                var e = _a[_i];
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
    toJSON: function (message) {
        var obj = {};
        if (message.requests) {
            obj.requests = message.requests.map(function (e) {
                return e ? oracle_1.RequestResult.toJSON(e) : undefined;
            });
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestsResponse);
        message.requests = [];
        if (object.requests !== undefined && object.requests !== null) {
            for (var _i = 0, _a = object.requests; _i < _a.length; _i++) {
                var e = _a[_i];
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
var baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryParamsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseQueryParamsRequest);
        return message;
    },
};
var baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryParamsResponse);
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
var baseQueryValidatorRequest = { validatorAddress: "" };
exports.QueryValidatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryValidatorRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryValidatorRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryValidatorRequest);
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
var baseQueryValidatorResponse = {};
exports.QueryValidatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== undefined) {
            oracle_1.ValidatorStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryValidatorResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryValidatorResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = oracle_1.ValidatorStatus.fromJSON(object.status);
        }
        else {
            message.status = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined &&
            (obj.status = message.status
                ? oracle_1.ValidatorStatus.toJSON(message.status)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryValidatorResponse);
        if (object.status !== undefined && object.status !== null) {
            message.status = oracle_1.ValidatorStatus.fromPartial(object.status);
        }
        else {
            message.status = undefined;
        }
        return message;
    },
};
var baseQueryReportersRequest = { validatorAddress: "" };
exports.QueryReportersRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryReportersRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryReportersRequest);
        if (object.validatorAddress !== undefined &&
            object.validatorAddress !== null) {
            message.validatorAddress = String(object.validatorAddress);
        }
        else {
            message.validatorAddress = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validatorAddress !== undefined &&
            (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryReportersRequest);
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
var baseQueryReportersResponse = { reporter: "" };
exports.QueryReportersResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.reporter; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryReportersResponse);
        message.reporter = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryReportersResponse);
        message.reporter = [];
        if (object.reporter !== undefined && object.reporter !== null) {
            for (var _i = 0, _a = object.reporter; _i < _a.length; _i++) {
                var e = _a[_i];
                message.reporter.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.reporter) {
            obj.reporter = message.reporter.map(function (e) { return e; });
        }
        else {
            obj.reporter = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryReportersResponse);
        message.reporter = [];
        if (object.reporter !== undefined && object.reporter !== null) {
            for (var _i = 0, _a = object.reporter; _i < _a.length; _i++) {
                var e = _a[_i];
                message.reporter.push(e);
            }
        }
        return message;
    },
};
var baseQueryActiveValidatorsRequest = {};
exports.QueryActiveValidatorsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryActiveValidatorsRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseQueryActiveValidatorsRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseQueryActiveValidatorsRequest);
        return message;
    },
};
var baseQueryActiveValidatorsResponse = { count: long_1.default.ZERO };
exports.QueryActiveValidatorsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.count.isZero()) {
            writer.uint32(8).int64(message.count);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryActiveValidatorsResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryActiveValidatorsResponse);
        if (object.count !== undefined && object.count !== null) {
            message.count = long_1.default.fromString(object.count);
        }
        else {
            message.count = long_1.default.ZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.count !== undefined &&
            (obj.count = (message.count || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryActiveValidatorsResponse);
        if (object.count !== undefined && object.count !== null) {
            message.count = object.count;
        }
        else {
            message.count = long_1.default.ZERO;
        }
        return message;
    },
};
var baseQueryRequestSearchRequest = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestSearchRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestSearchRequest);
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestSearchRequest);
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
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestSearchRequest);
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
var baseQueryRequestSearchResponse = {};
exports.QueryRequestSearchResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.requestPacketData !== undefined) {
            oracle_1.OracleRequestPacketData.encode(message.requestPacketData, writer.uint32(10).fork()).ldelim();
        }
        if (message.responsePacketData !== undefined) {
            oracle_1.OracleResponsePacketData.encode(message.responsePacketData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestSearchResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestSearchResponse);
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
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestSearchResponse);
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
var baseQueryRequestPriceRequest = {
    symbol: "",
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestPriceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestPriceRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestPriceRequest);
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
    toJSON: function (message) {
        var obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.ZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestPriceRequest);
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
var baseQueryRequestPriceResponse = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.ZERO,
    minCount: long_1.default.ZERO,
};
exports.QueryRequestPriceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestPriceResponse);
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestPriceResponse);
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
    toJSON: function (message) {
        var obj = {};
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
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestPriceResponse);
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
var baseQueryDataProvidersPoolRequest = {};
exports.QueryDataProvidersPoolRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataProvidersPoolRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseQueryDataProvidersPoolRequest);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseQueryDataProvidersPoolRequest);
        return message;
    },
};
var baseQueryDataProvidersPoolResponse = {};
exports.QueryDataProvidersPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.pool; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (var _i = 0, _a = object.pool; _i < _a.length; _i++) {
                var e = _a[_i];
                message.pool.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(function (e) { return (e ? coin_1.DecCoin.toJSON(e) : undefined); });
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDataProvidersPoolResponse);
        message.pool = [];
        if (object.pool !== undefined && object.pool !== null) {
            for (var _i = 0, _a = object.pool; _i < _a.length; _i++) {
                var e = _a[_i];
                message.pool.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
var baseQueryRequestIDs = { requestIds: long_1.default.ZERO };
exports.QueryRequestIDs = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.requestIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
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
    fromJSON: function (object) {
        var message = __assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        if (object.requestIds !== undefined && object.requestIds !== null) {
            for (var _i = 0, _a = object.requestIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.requestIds.push(long_1.default.fromString(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.requestIds) {
            obj.requestIds = message.requestIds.map(function (e) {
                return (e || long_1.default.ZERO).toString();
            });
        }
        else {
            obj.requestIds = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryRequestIDs);
        message.requestIds = [];
        if (object.requestIds !== undefined && object.requestIds !== null) {
            for (var _i = 0, _a = object.requestIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.requestIds.push(e);
            }
        }
        return message;
    },
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
    }
    QueryClientImpl.prototype.Counts = function (request) {
        var data = exports.QueryCountsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Counts", data);
        return promise.then(function (data) {
            return exports.QueryCountsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Data = function (request) {
        var data = exports.QueryDataRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Data", data);
        return promise.then(function (data) {
            return exports.QueryDataResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.DataSource = function (request) {
        var data = exports.QueryDataSourceRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "DataSource", data);
        return promise.then(function (data) {
            return exports.QueryDataSourceResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.DataSources = function (request) {
        var data = exports.QueryDataSourcesRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "DataSources", data);
        return promise.then(function (data) {
            return exports.QueryDataSourcesResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.OracleScript = function (request) {
        var data = exports.QueryOracleScriptRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "OracleScript", data);
        return promise.then(function (data) {
            return exports.QueryOracleScriptResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.OracleScripts = function (request) {
        var data = exports.QueryOracleScriptsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "OracleScripts", data);
        return promise.then(function (data) {
            return exports.QueryOracleScriptsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Request = function (request) {
        var data = exports.QueryRequestRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Request", data);
        return promise.then(function (data) {
            return exports.QueryRequestResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Requests = function (request) {
        var data = exports.QueryRequestsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Requests", data);
        return promise.then(function (data) {
            return exports.QueryRequestsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Validator = function (request) {
        var data = exports.QueryValidatorRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Validator", data);
        return promise.then(function (data) {
            return exports.QueryValidatorResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Reporters = function (request) {
        var data = exports.QueryReportersRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Reporters", data);
        return promise.then(function (data) {
            return exports.QueryReportersResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.ActiveValidators = function (request) {
        var data = exports.QueryActiveValidatorsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "ActiveValidators", data);
        return promise.then(function (data) {
            return exports.QueryActiveValidatorsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "Params", data);
        return promise.then(function (data) {
            return exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.RequestSearch = function (request) {
        var data = exports.QueryRequestSearchRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "RequestSearch", data);
        return promise.then(function (data) {
            return exports.QueryRequestSearchResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.RequestPrice = function (request) {
        var data = exports.QueryRequestPriceRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "RequestPrice", data);
        return promise.then(function (data) {
            return exports.QueryRequestPriceResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.DataProvidersPool = function (request) {
        var data = exports.QueryDataProvidersPoolRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "DataProvidersPool", data);
        return promise.then(function (data) {
            return exports.QueryDataProvidersPoolResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    QueryClientImpl.prototype.RequestReports = function (request) {
        var data = exports.QueryRequestReportsRequest.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Query", "RequestReports", data);
        return promise.then(function (data) {
            return exports.QueryRequestReportsResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
var globalThis = (function () {
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
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    for (var i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
