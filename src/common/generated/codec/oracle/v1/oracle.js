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
exports.DataProviderAccumulatedReward = exports.OraclePool = exports.IBCSource = exports.PendingResolveList = exports.ValidatorStatus = exports.Result = exports.RequestResult = exports.OracleResponsePacketData = exports.OracleRequestPacketAcknowledgement = exports.OracleRequestPacketData = exports.Report = exports.Request = exports.RawReport = exports.RawRequest = exports.OracleScript = exports.DataSource = exports.resolveStatusToJSON = exports.resolveStatusFromJSON = exports.ResolveStatus = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var timestamp_1 = require("../../google/protobuf/timestamp");
var coin_1 = require("../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "oracle.v1";
/** ResolveStatus encodes the status of an oracle request. */
var ResolveStatus;
(function (ResolveStatus) {
    /** RESOLVE_STATUS_OPEN_UNSPECIFIED - Open - the request is not yet resolved. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_OPEN_UNSPECIFIED"] = 0] = "RESOLVE_STATUS_OPEN_UNSPECIFIED";
    /** RESOLVE_STATUS_SUCCESS - Success - the request has been resolved successfully with no errors. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_SUCCESS"] = 1] = "RESOLVE_STATUS_SUCCESS";
    /** RESOLVE_STATUS_FAILURE - Failure - an error occured during the request's resolve call. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_FAILURE"] = 2] = "RESOLVE_STATUS_FAILURE";
    /**
     * RESOLVE_STATUS_EXPIRED - Expired - the request does not get enough reports from validator within the
     * timeframe.
     */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_EXPIRED"] = 3] = "RESOLVE_STATUS_EXPIRED";
    ResolveStatus[ResolveStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResolveStatus = exports.ResolveStatus || (exports.ResolveStatus = {}));
function resolveStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "RESOLVE_STATUS_OPEN_UNSPECIFIED":
            return ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED;
        case 1:
        case "RESOLVE_STATUS_SUCCESS":
            return ResolveStatus.RESOLVE_STATUS_SUCCESS;
        case 2:
        case "RESOLVE_STATUS_FAILURE":
            return ResolveStatus.RESOLVE_STATUS_FAILURE;
        case 3:
        case "RESOLVE_STATUS_EXPIRED":
            return ResolveStatus.RESOLVE_STATUS_EXPIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResolveStatus.UNRECOGNIZED;
    }
}
exports.resolveStatusFromJSON = resolveStatusFromJSON;
function resolveStatusToJSON(object) {
    switch (object) {
        case ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED:
            return "RESOLVE_STATUS_OPEN_UNSPECIFIED";
        case ResolveStatus.RESOLVE_STATUS_SUCCESS:
            return "RESOLVE_STATUS_SUCCESS";
        case ResolveStatus.RESOLVE_STATUS_FAILURE:
            return "RESOLVE_STATUS_FAILURE";
        case ResolveStatus.RESOLVE_STATUS_EXPIRED:
            return "RESOLVE_STATUS_EXPIRED";
        default:
            return "UNKNOWN";
    }
}
exports.resolveStatusToJSON = resolveStatusToJSON;
var baseDataSource = {
    id: long_1.default.ZERO,
    owner: "",
    name: "",
    description: "",
    filename: "",
};
exports.DataSource = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.filename !== "") {
            writer.uint32(42).string(message.filename);
        }
        for (var _i = 0, _a = message.fee; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDataSource);
        message.fee = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.filename = reader.string();
                    break;
                case 6:
                    message.fee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDataSource);
        message.fee = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.ZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = String(object.filename);
        }
        else {
            message.filename = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.ZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.filename !== undefined && (obj.filename = message.filename);
        if (message.fee) {
            obj.fee = message.fee.map(function (e) { return (e ? coin_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.fee = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDataSource);
        message.fee = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.ZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = object.filename;
        }
        else {
            message.filename = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
var baseOracleScript = {
    id: long_1.default.ZERO,
    owner: "",
    name: "",
    description: "",
    filename: "",
    schema: "",
    sourceCodeUrl: "",
};
exports.OracleScript = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.filename !== "") {
            writer.uint32(42).string(message.filename);
        }
        if (message.schema !== "") {
            writer.uint32(50).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(58).string(message.sourceCodeUrl);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseOracleScript);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.filename = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.sourceCodeUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseOracleScript);
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.ZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = String(object.filename);
        }
        else {
            message.filename = "";
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        }
        else {
            message.schema = "";
        }
        if (object.sourceCodeUrl !== undefined && object.sourceCodeUrl !== null) {
            message.sourceCodeUrl = String(object.sourceCodeUrl);
        }
        else {
            message.sourceCodeUrl = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.ZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.filename !== undefined && (obj.filename = message.filename);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined &&
            (obj.sourceCodeUrl = message.sourceCodeUrl);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseOracleScript);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.ZERO;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.filename !== undefined && object.filename !== null) {
            message.filename = object.filename;
        }
        else {
            message.filename = "";
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        else {
            message.schema = "";
        }
        if (object.sourceCodeUrl !== undefined && object.sourceCodeUrl !== null) {
            message.sourceCodeUrl = object.sourceCodeUrl;
        }
        else {
            message.sourceCodeUrl = "";
        }
        return message;
    },
};
var baseRawRequest = {
    externalId: long_1.default.ZERO,
    dataSourceId: long_1.default.ZERO,
};
exports.RawRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.externalId.isZero()) {
            writer.uint32(8).int64(message.externalId);
        }
        if (!message.dataSourceId.isZero()) {
            writer.uint32(16).int64(message.dataSourceId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRawRequest);
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalId = reader.int64();
                    break;
                case 2:
                    message.dataSourceId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRawRequest);
        message.calldata = new Uint8Array();
        if (object.externalId !== undefined && object.externalId !== null) {
            message.externalId = long_1.default.fromString(object.externalId);
        }
        else {
            message.externalId = long_1.default.ZERO;
        }
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = long_1.default.fromString(object.dataSourceId);
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = bytesFromBase64(object.calldata);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.externalId !== undefined &&
            (obj.externalId = (message.externalId || long_1.default.ZERO).toString());
        message.dataSourceId !== undefined &&
            (obj.dataSourceId = (message.dataSourceId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRawRequest);
        if (object.externalId !== undefined && object.externalId !== null) {
            message.externalId = object.externalId;
        }
        else {
            message.externalId = long_1.default.ZERO;
        }
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = object.dataSourceId;
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = object.calldata;
        }
        else {
            message.calldata = new Uint8Array();
        }
        return message;
    },
};
var baseRawReport = { externalId: long_1.default.ZERO, exitCode: 0 };
exports.RawReport = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.externalId.isZero()) {
            writer.uint32(8).int64(message.externalId);
        }
        if (message.exitCode !== 0) {
            writer.uint32(16).uint32(message.exitCode);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRawReport);
        message.data = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalId = reader.int64();
                    break;
                case 2:
                    message.exitCode = reader.uint32();
                    break;
                case 3:
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
        var message = __assign({}, baseRawReport);
        message.data = new Uint8Array();
        if (object.externalId !== undefined && object.externalId !== null) {
            message.externalId = long_1.default.fromString(object.externalId);
        }
        else {
            message.externalId = long_1.default.ZERO;
        }
        if (object.exitCode !== undefined && object.exitCode !== null) {
            message.exitCode = Number(object.exitCode);
        }
        else {
            message.exitCode = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.externalId !== undefined &&
            (obj.externalId = (message.externalId || long_1.default.ZERO).toString());
        message.exitCode !== undefined && (obj.exitCode = message.exitCode);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRawReport);
        if (object.externalId !== undefined && object.externalId !== null) {
            message.externalId = object.externalId;
        }
        else {
            message.externalId = long_1.default.ZERO;
        }
        if (object.exitCode !== undefined && object.exitCode !== null) {
            message.exitCode = object.exitCode;
        }
        else {
            message.exitCode = 0;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        return message;
    },
};
var baseRequest = {
    id: long_1.default.ZERO,
    oracleScriptId: long_1.default.ZERO,
    requestedValidators: "",
    minCount: long_1.default.UZERO,
    requestHeight: long_1.default.ZERO,
    requestTime: long_1.default.UZERO,
    clientId: "",
    executeGas: long_1.default.UZERO,
};
exports.Request = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        for (var _i = 0, _a = message.requestedValidators; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(34).string(v);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        if (!message.requestHeight.isZero()) {
            writer.uint32(48).int64(message.requestHeight);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(56).uint64(message.requestTime);
        }
        if (message.clientId !== "") {
            writer.uint32(66).string(message.clientId);
        }
        for (var _b = 0, _c = message.rawRequests; _b < _c.length; _b++) {
            var v = _c[_b];
            exports.RawRequest.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.ibcSource !== undefined) {
            exports.IBCSource.encode(message.ibcSource, writer.uint32(82).fork()).ldelim();
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(88).uint64(message.executeGas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRequest);
        message.requestedValidators = [];
        message.rawRequests = [];
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.requestedValidators.push(reader.string());
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.requestHeight = reader.int64();
                    break;
                case 7:
                    message.requestTime = reader.uint64();
                    break;
                case 8:
                    message.clientId = reader.string();
                    break;
                case 9:
                    message.rawRequests.push(exports.RawRequest.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.ibcSource = exports.IBCSource.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.executeGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRequest);
        message.requestedValidators = [];
        message.rawRequests = [];
        message.calldata = new Uint8Array();
        if (object.id !== undefined && object.id !== null) {
            message.id = long_1.default.fromString(object.id);
        }
        else {
            message.id = long_1.default.ZERO;
        }
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
        }
        if (object.calldata !== undefined && object.calldata !== null) {
            message.calldata = bytesFromBase64(object.calldata);
        }
        if (object.requestedValidators !== undefined &&
            object.requestedValidators !== null) {
            for (var _i = 0, _a = object.requestedValidators; _i < _a.length; _i++) {
                var e = _a[_i];
                message.requestedValidators.push(String(e));
            }
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.requestHeight !== undefined && object.requestHeight !== null) {
            message.requestHeight = long_1.default.fromString(object.requestHeight);
        }
        else {
            message.requestHeight = long_1.default.ZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = long_1.default.fromString(object.requestTime);
        }
        else {
            message.requestTime = long_1.default.UZERO;
        }
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = "";
        }
        if (object.rawRequests !== undefined && object.rawRequests !== null) {
            for (var _b = 0, _c = object.rawRequests; _b < _c.length; _b++) {
                var e = _c[_b];
                message.rawRequests.push(exports.RawRequest.fromJSON(e));
            }
        }
        if (object.ibcSource !== undefined && object.ibcSource !== null) {
            message.ibcSource = exports.IBCSource.fromJSON(object.ibcSource);
        }
        else {
            message.ibcSource = undefined;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = long_1.default.fromString(object.executeGas);
        }
        else {
            message.executeGas = long_1.default.UZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = (message.id || long_1.default.ZERO).toString());
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        if (message.requestedValidators) {
            obj.requestedValidators = message.requestedValidators.map(function (e) { return e; });
        }
        else {
            obj.requestedValidators = [];
        }
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.UZERO).toString());
        message.requestHeight !== undefined &&
            (obj.requestHeight = (message.requestHeight || long_1.default.ZERO).toString());
        message.requestTime !== undefined &&
            (obj.requestTime = (message.requestTime || long_1.default.UZERO).toString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.rawRequests) {
            obj.rawRequests = message.rawRequests.map(function (e) {
                return e ? exports.RawRequest.toJSON(e) : undefined;
            });
        }
        else {
            obj.rawRequests = [];
        }
        message.ibcSource !== undefined &&
            (obj.ibcSource = message.ibcSource
                ? exports.IBCSource.toJSON(message.ibcSource)
                : undefined);
        message.executeGas !== undefined &&
            (obj.executeGas = (message.executeGas || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRequest);
        message.requestedValidators = [];
        message.rawRequests = [];
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.ZERO;
        }
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
        if (object.requestedValidators !== undefined &&
            object.requestedValidators !== null) {
            for (var _i = 0, _a = object.requestedValidators; _i < _a.length; _i++) {
                var e = _a[_i];
                message.requestedValidators.push(e);
            }
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.requestHeight !== undefined && object.requestHeight !== null) {
            message.requestHeight = object.requestHeight;
        }
        else {
            message.requestHeight = long_1.default.ZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = object.requestTime;
        }
        else {
            message.requestTime = long_1.default.UZERO;
        }
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = "";
        }
        if (object.rawRequests !== undefined && object.rawRequests !== null) {
            for (var _b = 0, _c = object.rawRequests; _b < _c.length; _b++) {
                var e = _c[_b];
                message.rawRequests.push(exports.RawRequest.fromPartial(e));
            }
        }
        if (object.ibcSource !== undefined && object.ibcSource !== null) {
            message.ibcSource = exports.IBCSource.fromPartial(object.ibcSource);
        }
        else {
            message.ibcSource = undefined;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = object.executeGas;
        }
        else {
            message.executeGas = long_1.default.UZERO;
        }
        return message;
    },
};
var baseReport = { validator: "", inBeforeResolve: false };
exports.Report = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.inBeforeResolve === true) {
            writer.uint32(16).bool(message.inBeforeResolve);
        }
        for (var _i = 0, _a = message.rawReports; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.RawReport.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseReport);
        message.rawReports = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.inBeforeResolve = reader.bool();
                    break;
                case 3:
                    message.rawReports.push(exports.RawReport.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseReport);
        message.rawReports = [];
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.inBeforeResolve !== undefined &&
            object.inBeforeResolve !== null) {
            message.inBeforeResolve = Boolean(object.inBeforeResolve);
        }
        else {
            message.inBeforeResolve = false;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (var _i = 0, _a = object.rawReports; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rawReports.push(exports.RawReport.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.inBeforeResolve !== undefined &&
            (obj.inBeforeResolve = message.inBeforeResolve);
        if (message.rawReports) {
            obj.rawReports = message.rawReports.map(function (e) {
                return e ? exports.RawReport.toJSON(e) : undefined;
            });
        }
        else {
            obj.rawReports = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseReport);
        message.rawReports = [];
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.inBeforeResolve !== undefined &&
            object.inBeforeResolve !== null) {
            message.inBeforeResolve = object.inBeforeResolve;
        }
        else {
            message.inBeforeResolve = false;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (var _i = 0, _a = object.rawReports; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rawReports.push(exports.RawReport.fromPartial(e));
            }
        }
        return message;
    },
};
var baseOracleRequestPacketData = {
    clientId: "",
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.UZERO,
    minCount: long_1.default.UZERO,
    requestKey: "",
    prepareGas: long_1.default.UZERO,
    executeGas: long_1.default.UZERO,
};
exports.OracleRequestPacketData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        for (var _i = 0, _a = message.feeLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.requestKey !== "") {
            writer.uint32(58).string(message.requestKey);
        }
        if (!message.prepareGas.isZero()) {
            writer.uint32(64).uint64(message.prepareGas);
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(72).uint64(message.executeGas);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseOracleRequestPacketData);
        message.feeLimit = [];
        message.calldata = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.askCount = reader.uint64();
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.feeLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requestKey = reader.string();
                    break;
                case 8:
                    message.prepareGas = reader.uint64();
                    break;
                case 9:
                    message.executeGas = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseOracleRequestPacketData);
        message.feeLimit = [];
        message.calldata = new Uint8Array();
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = "";
        }
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
            message.askCount = long_1.default.UZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (var _i = 0, _a = object.feeLimit; _i < _a.length; _i++) {
                var e = _a[_i];
                message.feeLimit.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = String(object.requestKey);
        }
        else {
            message.requestKey = "";
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = long_1.default.fromString(object.prepareGas);
        }
        else {
            message.prepareGas = long_1.default.UZERO;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = long_1.default.fromString(object.executeGas);
        }
        else {
            message.executeGas = long_1.default.UZERO;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.UZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.UZERO).toString());
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map(function (e) {
                return e ? coin_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.feeLimit = [];
        }
        message.requestKey !== undefined && (obj.requestKey = message.requestKey);
        message.prepareGas !== undefined &&
            (obj.prepareGas = (message.prepareGas || long_1.default.UZERO).toString());
        message.executeGas !== undefined &&
            (obj.executeGas = (message.executeGas || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseOracleRequestPacketData);
        message.feeLimit = [];
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = "";
        }
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
            message.askCount = long_1.default.UZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (var _i = 0, _a = object.feeLimit; _i < _a.length; _i++) {
                var e = _a[_i];
                message.feeLimit.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.requestKey !== undefined && object.requestKey !== null) {
            message.requestKey = object.requestKey;
        }
        else {
            message.requestKey = "";
        }
        if (object.prepareGas !== undefined && object.prepareGas !== null) {
            message.prepareGas = object.prepareGas;
        }
        else {
            message.prepareGas = long_1.default.UZERO;
        }
        if (object.executeGas !== undefined && object.executeGas !== null) {
            message.executeGas = object.executeGas;
        }
        else {
            message.executeGas = long_1.default.UZERO;
        }
        return message;
    },
};
var baseOracleRequestPacketAcknowledgement = { requestId: long_1.default.ZERO };
exports.OracleRequestPacketAcknowledgement = {
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
        var message = __assign({}, baseOracleRequestPacketAcknowledgement);
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
        var message = __assign({}, baseOracleRequestPacketAcknowledgement);
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
        var message = __assign({}, baseOracleRequestPacketAcknowledgement);
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        return message;
    },
};
var baseOracleResponsePacketData = {
    clientId: "",
    requestId: long_1.default.ZERO,
    ansCount: long_1.default.UZERO,
    requestTime: long_1.default.ZERO,
    resolveTime: long_1.default.ZERO,
    resolveStatus: 0,
};
exports.OracleResponsePacketData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.requestId.isZero()) {
            writer.uint32(16).int64(message.requestId);
        }
        if (!message.ansCount.isZero()) {
            writer.uint32(24).uint64(message.ansCount);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(32).int64(message.requestTime);
        }
        if (!message.resolveTime.isZero()) {
            writer.uint32(40).int64(message.resolveTime);
        }
        if (message.resolveStatus !== 0) {
            writer.uint32(48).int32(message.resolveStatus);
        }
        if (message.result.length !== 0) {
            writer.uint32(58).bytes(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseOracleResponsePacketData);
        message.result = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.requestId = reader.int64();
                    break;
                case 3:
                    message.ansCount = reader.uint64();
                    break;
                case 4:
                    message.requestTime = reader.int64();
                    break;
                case 5:
                    message.resolveTime = reader.int64();
                    break;
                case 6:
                    message.resolveStatus = reader.int32();
                    break;
                case 7:
                    message.result = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseOracleResponsePacketData);
        message.result = new Uint8Array();
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = "";
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.ansCount !== undefined && object.ansCount !== null) {
            message.ansCount = long_1.default.fromString(object.ansCount);
        }
        else {
            message.ansCount = long_1.default.UZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = long_1.default.fromString(object.requestTime);
        }
        else {
            message.requestTime = long_1.default.ZERO;
        }
        if (object.resolveTime !== undefined && object.resolveTime !== null) {
            message.resolveTime = long_1.default.fromString(object.resolveTime);
        }
        else {
            message.resolveTime = long_1.default.ZERO;
        }
        if (object.resolveStatus !== undefined && object.resolveStatus !== null) {
            message.resolveStatus = resolveStatusFromJSON(object.resolveStatus);
        }
        else {
            message.resolveStatus = 0;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = bytesFromBase64(object.result);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        message.ansCount !== undefined &&
            (obj.ansCount = (message.ansCount || long_1.default.UZERO).toString());
        message.requestTime !== undefined &&
            (obj.requestTime = (message.requestTime || long_1.default.ZERO).toString());
        message.resolveTime !== undefined &&
            (obj.resolveTime = (message.resolveTime || long_1.default.ZERO).toString());
        message.resolveStatus !== undefined &&
            (obj.resolveStatus = resolveStatusToJSON(message.resolveStatus));
        message.result !== undefined &&
            (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseOracleResponsePacketData);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = "";
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.ansCount !== undefined && object.ansCount !== null) {
            message.ansCount = object.ansCount;
        }
        else {
            message.ansCount = long_1.default.UZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = object.requestTime;
        }
        else {
            message.requestTime = long_1.default.ZERO;
        }
        if (object.resolveTime !== undefined && object.resolveTime !== null) {
            message.resolveTime = object.resolveTime;
        }
        else {
            message.resolveTime = long_1.default.ZERO;
        }
        if (object.resolveStatus !== undefined && object.resolveStatus !== null) {
            message.resolveStatus = object.resolveStatus;
        }
        else {
            message.resolveStatus = 0;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = new Uint8Array();
        }
        return message;
    },
};
var baseRequestResult = {};
exports.RequestResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.requestPacketData !== undefined) {
            exports.OracleRequestPacketData.encode(message.requestPacketData, writer.uint32(10).fork()).ldelim();
        }
        if (message.responsePacketData !== undefined) {
            exports.OracleResponsePacketData.encode(message.responsePacketData, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseRequestResult);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestPacketData = exports.OracleRequestPacketData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.responsePacketData = exports.OracleResponsePacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseRequestResult);
        if (object.requestPacketData !== undefined &&
            object.requestPacketData !== null) {
            message.requestPacketData = exports.OracleRequestPacketData.fromJSON(object.requestPacketData);
        }
        else {
            message.requestPacketData = undefined;
        }
        if (object.responsePacketData !== undefined &&
            object.responsePacketData !== null) {
            message.responsePacketData = exports.OracleResponsePacketData.fromJSON(object.responsePacketData);
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
                ? exports.OracleRequestPacketData.toJSON(message.requestPacketData)
                : undefined);
        message.responsePacketData !== undefined &&
            (obj.responsePacketData = message.responsePacketData
                ? exports.OracleResponsePacketData.toJSON(message.responsePacketData)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseRequestResult);
        if (object.requestPacketData !== undefined &&
            object.requestPacketData !== null) {
            message.requestPacketData = exports.OracleRequestPacketData.fromPartial(object.requestPacketData);
        }
        else {
            message.requestPacketData = undefined;
        }
        if (object.responsePacketData !== undefined &&
            object.responsePacketData !== null) {
            message.responsePacketData = exports.OracleResponsePacketData.fromPartial(object.responsePacketData);
        }
        else {
            message.responsePacketData = undefined;
        }
        return message;
    },
};
var baseResult = {
    clientId: "",
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.UZERO,
    minCount: long_1.default.UZERO,
    requestId: long_1.default.ZERO,
    ansCount: long_1.default.UZERO,
    requestTime: long_1.default.ZERO,
    resolveTime: long_1.default.ZERO,
    resolveStatus: 0,
};
exports.Result = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        if (!message.requestId.isZero()) {
            writer.uint32(48).int64(message.requestId);
        }
        if (!message.ansCount.isZero()) {
            writer.uint32(56).uint64(message.ansCount);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(64).int64(message.requestTime);
        }
        if (!message.resolveTime.isZero()) {
            writer.uint32(72).int64(message.resolveTime);
        }
        if (message.resolveStatus !== 0) {
            writer.uint32(80).int32(message.resolveStatus);
        }
        if (message.result.length !== 0) {
            writer.uint32(90).bytes(message.result);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseResult);
        message.calldata = new Uint8Array();
        message.result = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.askCount = reader.uint64();
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.requestId = reader.int64();
                    break;
                case 7:
                    message.ansCount = reader.uint64();
                    break;
                case 8:
                    message.requestTime = reader.int64();
                    break;
                case 9:
                    message.resolveTime = reader.int64();
                    break;
                case 10:
                    message.resolveStatus = reader.int32();
                    break;
                case 11:
                    message.result = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseResult);
        message.calldata = new Uint8Array();
        message.result = new Uint8Array();
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = "";
        }
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
            message.askCount = long_1.default.UZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.ansCount !== undefined && object.ansCount !== null) {
            message.ansCount = long_1.default.fromString(object.ansCount);
        }
        else {
            message.ansCount = long_1.default.UZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = long_1.default.fromString(object.requestTime);
        }
        else {
            message.requestTime = long_1.default.ZERO;
        }
        if (object.resolveTime !== undefined && object.resolveTime !== null) {
            message.resolveTime = long_1.default.fromString(object.resolveTime);
        }
        else {
            message.resolveTime = long_1.default.ZERO;
        }
        if (object.resolveStatus !== undefined && object.resolveStatus !== null) {
            message.resolveStatus = resolveStatusFromJSON(object.resolveStatus);
        }
        else {
            message.resolveStatus = 0;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = bytesFromBase64(object.result);
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined &&
            (obj.askCount = (message.askCount || long_1.default.UZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.UZERO).toString());
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        message.ansCount !== undefined &&
            (obj.ansCount = (message.ansCount || long_1.default.UZERO).toString());
        message.requestTime !== undefined &&
            (obj.requestTime = (message.requestTime || long_1.default.ZERO).toString());
        message.resolveTime !== undefined &&
            (obj.resolveTime = (message.resolveTime || long_1.default.ZERO).toString());
        message.resolveStatus !== undefined &&
            (obj.resolveStatus = resolveStatusToJSON(message.resolveStatus));
        message.result !== undefined &&
            (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseResult);
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = "";
        }
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
            message.askCount = long_1.default.UZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = object.minCount;
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.ansCount !== undefined && object.ansCount !== null) {
            message.ansCount = object.ansCount;
        }
        else {
            message.ansCount = long_1.default.UZERO;
        }
        if (object.requestTime !== undefined && object.requestTime !== null) {
            message.requestTime = object.requestTime;
        }
        else {
            message.requestTime = long_1.default.ZERO;
        }
        if (object.resolveTime !== undefined && object.resolveTime !== null) {
            message.resolveTime = object.resolveTime;
        }
        else {
            message.resolveTime = long_1.default.ZERO;
        }
        if (object.resolveStatus !== undefined && object.resolveStatus !== null) {
            message.resolveStatus = object.resolveStatus;
        }
        else {
            message.resolveStatus = 0;
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = new Uint8Array();
        }
        return message;
    },
};
var baseValidatorStatus = { isActive: false };
exports.ValidatorStatus = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.isActive === true) {
            writer.uint32(8).bool(message.isActive);
        }
        if (message.since !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.since), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseValidatorStatus);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isActive = reader.bool();
                    break;
                case 2:
                    message.since = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseValidatorStatus);
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = Boolean(object.isActive);
        }
        else {
            message.isActive = false;
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = fromJsonTimestamp(object.since);
        }
        else {
            message.since = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.since !== undefined && (obj.since = message.since.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseValidatorStatus);
        if (object.isActive !== undefined && object.isActive !== null) {
            message.isActive = object.isActive;
        }
        else {
            message.isActive = false;
        }
        if (object.since !== undefined && object.since !== null) {
            message.since = object.since;
        }
        else {
            message.since = undefined;
        }
        return message;
    },
};
var basePendingResolveList = { requestIds: long_1.default.ZERO };
exports.PendingResolveList = {
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
        var message = __assign({}, basePendingResolveList);
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
        var message = __assign({}, basePendingResolveList);
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
        var message = __assign({}, basePendingResolveList);
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
var baseIBCSource = { sourceChannel: "", sourcePort: "" };
exports.IBCSource = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.sourceChannel !== "") {
            writer.uint32(10).string(message.sourceChannel);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseIBCSource);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChannel = reader.string();
                    break;
                case 2:
                    message.sourcePort = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseIBCSource);
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = String(object.sourceChannel);
        }
        else {
            message.sourceChannel = "";
        }
        if (object.sourcePort !== undefined && object.sourcePort !== null) {
            message.sourcePort = String(object.sourcePort);
        }
        else {
            message.sourcePort = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.sourceChannel !== undefined &&
            (obj.sourceChannel = message.sourceChannel);
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseIBCSource);
        if (object.sourceChannel !== undefined && object.sourceChannel !== null) {
            message.sourceChannel = object.sourceChannel;
        }
        else {
            message.sourceChannel = "";
        }
        if (object.sourcePort !== undefined && object.sourcePort !== null) {
            message.sourcePort = object.sourcePort;
        }
        else {
            message.sourcePort = "";
        }
        return message;
    },
};
var baseOraclePool = {};
exports.OraclePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _a = message.dataProvidersPool; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseOraclePool);
        message.dataProvidersPool = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataProvidersPool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseOraclePool);
        message.dataProvidersPool = [];
        if (object.dataProvidersPool !== undefined &&
            object.dataProvidersPool !== null) {
            for (var _i = 0, _a = object.dataProvidersPool; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProvidersPool.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.dataProvidersPool) {
            obj.dataProvidersPool = message.dataProvidersPool.map(function (e) {
                return e ? coin_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.dataProvidersPool = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseOraclePool);
        message.dataProvidersPool = [];
        if (object.dataProvidersPool !== undefined &&
            object.dataProvidersPool !== null) {
            for (var _i = 0, _a = object.dataProvidersPool; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProvidersPool.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
var baseDataProviderAccumulatedReward = { dataProvider: "" };
exports.DataProviderAccumulatedReward = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.dataProvider !== "") {
            writer.uint32(10).string(message.dataProvider);
        }
        for (var _i = 0, _a = message.dataProviderReward; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDataProviderAccumulatedReward);
        message.dataProviderReward = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataProvider = reader.string();
                    break;
                case 2:
                    message.dataProviderReward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDataProviderAccumulatedReward);
        message.dataProviderReward = [];
        if (object.dataProvider !== undefined && object.dataProvider !== null) {
            message.dataProvider = String(object.dataProvider);
        }
        else {
            message.dataProvider = "";
        }
        if (object.dataProviderReward !== undefined &&
            object.dataProviderReward !== null) {
            for (var _i = 0, _a = object.dataProviderReward; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProviderReward.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.dataProvider !== undefined &&
            (obj.dataProvider = message.dataProvider);
        if (message.dataProviderReward) {
            obj.dataProviderReward = message.dataProviderReward.map(function (e) {
                return e ? coin_1.DecCoin.toJSON(e) : undefined;
            });
        }
        else {
            obj.dataProviderReward = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDataProviderAccumulatedReward);
        message.dataProviderReward = [];
        if (object.dataProvider !== undefined && object.dataProvider !== null) {
            message.dataProvider = object.dataProvider;
        }
        else {
            message.dataProvider = "";
        }
        if (object.dataProviderReward !== undefined &&
            object.dataProviderReward !== null) {
            for (var _i = 0, _a = object.dataProviderReward; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProviderReward.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        return message;
    },
};
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
function toTimestamp(date) {
    var seconds = numberToLong(date.getTime() / 1000);
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
