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
exports.MsgClientImpl = exports.MsgRemoveReporterResponse = exports.MsgRemoveReporter = exports.MsgAddReporterResponse = exports.MsgAddReporter = exports.MsgActivateResponse = exports.MsgActivate = exports.MsgEditOracleScriptResponse = exports.MsgEditOracleScript = exports.MsgCreateOracleScriptResponse = exports.MsgCreateOracleScript = exports.MsgEditDataSourceResponse = exports.MsgEditDataSource = exports.MsgCreateDataSourceResponse = exports.MsgCreateDataSource = exports.MsgReportDataResponse = exports.MsgReportData = exports.MsgRequestDataResponse = exports.MsgRequestData = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../cosmos/base/v1beta1/coin");
var oracle_1 = require("../../oracle/v1/oracle");
exports.protobufPackage = "oracle.v1";
var baseMsgRequestData = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.UZERO,
    minCount: long_1.default.UZERO,
    clientId: "",
    prepareGas: long_1.default.UZERO,
    executeGas: long_1.default.UZERO,
    sender: "",
};
exports.MsgRequestData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).uint64(message.minCount);
        }
        if (message.clientId !== "") {
            writer.uint32(42).string(message.clientId);
        }
        for (var _i = 0, _a = message.feeLimit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (!message.prepareGas.isZero()) {
            writer.uint32(56).uint64(message.prepareGas);
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(64).uint64(message.executeGas);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgRequestData);
        message.feeLimit = [];
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
                    message.askCount = reader.uint64();
                    break;
                case 4:
                    message.minCount = reader.uint64();
                    break;
                case 5:
                    message.clientId = reader.string();
                    break;
                case 6:
                    message.feeLimit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.prepareGas = reader.uint64();
                    break;
                case 8:
                    message.executeGas = reader.uint64();
                    break;
                case 9:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgRequestData);
        message.feeLimit = [];
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
            message.askCount = long_1.default.UZERO;
        }
        if (object.minCount !== undefined && object.minCount !== null) {
            message.minCount = long_1.default.fromString(object.minCount);
        }
        else {
            message.minCount = long_1.default.UZERO;
        }
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = String(object.clientId);
        }
        else {
            message.clientId = "";
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (var _i = 0, _a = object.feeLimit; _i < _a.length; _i++) {
                var e = _a[_i];
                message.feeLimit.push(coin_1.Coin.fromJSON(e));
            }
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
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
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
            (obj.askCount = (message.askCount || long_1.default.UZERO).toString());
        message.minCount !== undefined &&
            (obj.minCount = (message.minCount || long_1.default.UZERO).toString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map(function (e) {
                return e ? coin_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.feeLimit = [];
        }
        message.prepareGas !== undefined &&
            (obj.prepareGas = (message.prepareGas || long_1.default.UZERO).toString());
        message.executeGas !== undefined &&
            (obj.executeGas = (message.executeGas || long_1.default.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgRequestData);
        message.feeLimit = [];
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
        if (object.clientId !== undefined && object.clientId !== null) {
            message.clientId = object.clientId;
        }
        else {
            message.clientId = "";
        }
        if (object.feeLimit !== undefined && object.feeLimit !== null) {
            for (var _i = 0, _a = object.feeLimit; _i < _a.length; _i++) {
                var e = _a[_i];
                message.feeLimit.push(coin_1.Coin.fromPartial(e));
            }
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
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
var baseMsgRequestDataResponse = {};
exports.MsgRequestDataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgRequestDataResponse);
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
        var message = __assign({}, baseMsgRequestDataResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgRequestDataResponse);
        return message;
    },
};
var baseMsgReportData = {
    requestId: long_1.default.ZERO,
    validator: "",
    reporter: "",
};
exports.MsgReportData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        for (var _i = 0, _a = message.rawReports; _i < _a.length; _i++) {
            var v = _a[_i];
            oracle_1.RawReport.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(34).string(message.reporter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgReportData);
        message.rawReports = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                case 2:
                    message.rawReports.push(oracle_1.RawReport.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                case 4:
                    message.reporter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgReportData);
        message.rawReports = [];
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (var _i = 0, _a = object.rawReports; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rawReports.push(oracle_1.RawReport.fromJSON(e));
            }
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = String(object.reporter);
        }
        else {
            message.reporter = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        if (message.rawReports) {
            obj.rawReports = message.rawReports.map(function (e) {
                return e ? oracle_1.RawReport.toJSON(e) : undefined;
            });
        }
        else {
            obj.rawReports = [];
        }
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgReportData);
        message.rawReports = [];
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (var _i = 0, _a = object.rawReports; _i < _a.length; _i++) {
                var e = _a[_i];
                message.rawReports.push(oracle_1.RawReport.fromPartial(e));
            }
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = object.reporter;
        }
        else {
            message.reporter = "";
        }
        return message;
    },
};
var baseMsgReportDataResponse = {};
exports.MsgReportDataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgReportDataResponse);
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
        var message = __assign({}, baseMsgReportDataResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgReportDataResponse);
        return message;
    },
};
var baseMsgCreateDataSource = {
    name: "",
    description: "",
    owner: "",
    sender: "",
};
exports.MsgCreateDataSource = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executable.length !== 0) {
            writer.uint32(26).bytes(message.executable);
        }
        for (var _i = 0, _a = message.fee; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.executable = reader.bytes();
                    break;
                case 4:
                    message.fee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgCreateDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
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
        if (object.executable !== undefined && object.executable !== null) {
            message.executable = bytesFromBase64(object.executable);
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map(function (e) { return (e ? coin_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgCreateDataSource);
        message.fee = [];
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
        if (object.executable !== undefined && object.executable !== null) {
            message.executable = object.executable;
        }
        else {
            message.executable = new Uint8Array();
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
var baseMsgCreateDataSourceResponse = {};
exports.MsgCreateDataSourceResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateDataSourceResponse);
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
        var message = __assign({}, baseMsgCreateDataSourceResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgCreateDataSourceResponse);
        return message;
    },
};
var baseMsgEditDataSource = {
    dataSourceId: long_1.default.ZERO,
    name: "",
    description: "",
    owner: "",
    sender: "",
};
exports.MsgEditDataSource = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.dataSourceId.isZero()) {
            writer.uint32(8).int64(message.dataSourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.executable.length !== 0) {
            writer.uint32(34).bytes(message.executable);
        }
        for (var _i = 0, _a = message.fee; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgEditDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.executable = reader.bytes();
                    break;
                case 5:
                    message.fee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgEditDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = long_1.default.fromString(object.dataSourceId);
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
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
        if (object.executable !== undefined && object.executable !== null) {
            message.executable = bytesFromBase64(object.executable);
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.dataSourceId !== undefined &&
            (obj.dataSourceId = (message.dataSourceId || long_1.default.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map(function (e) { return (e ? coin_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgEditDataSource);
        message.fee = [];
        if (object.dataSourceId !== undefined && object.dataSourceId !== null) {
            message.dataSourceId = object.dataSourceId;
        }
        else {
            message.dataSourceId = long_1.default.ZERO;
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
        if (object.executable !== undefined && object.executable !== null) {
            message.executable = object.executable;
        }
        else {
            message.executable = new Uint8Array();
        }
        if (object.fee !== undefined && object.fee !== null) {
            for (var _i = 0, _a = object.fee; _i < _a.length; _i++) {
                var e = _a[_i];
                message.fee.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
var baseMsgEditDataSourceResponse = {};
exports.MsgEditDataSourceResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgEditDataSourceResponse);
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
        var message = __assign({}, baseMsgEditDataSourceResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgEditDataSourceResponse);
        return message;
    },
};
var baseMsgCreateOracleScript = {
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    owner: "",
    sender: "",
};
exports.MsgCreateOracleScript = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schema !== "") {
            writer.uint32(26).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(34).string(message.sourceCodeUrl);
        }
        if (message.code.length !== 0) {
            writer.uint32(42).bytes(message.code);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateOracleScript);
        message.code = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.schema = reader.string();
                    break;
                case 4:
                    message.sourceCodeUrl = reader.string();
                    break;
                case 5:
                    message.code = reader.bytes();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgCreateOracleScript);
        message.code = new Uint8Array();
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
        if (object.code !== undefined && object.code !== null) {
            message.code = bytesFromBase64(object.code);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined &&
            (obj.sourceCodeUrl = message.sourceCodeUrl);
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgCreateOracleScript);
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
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = new Uint8Array();
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
var baseMsgCreateOracleScriptResponse = {};
exports.MsgCreateOracleScriptResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateOracleScriptResponse);
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
        var message = __assign({}, baseMsgCreateOracleScriptResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgCreateOracleScriptResponse);
        return message;
    },
};
var baseMsgEditOracleScript = {
    oracleScriptId: long_1.default.ZERO,
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    owner: "",
    sender: "",
};
exports.MsgEditOracleScript = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.schema !== "") {
            writer.uint32(34).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(42).string(message.sourceCodeUrl);
        }
        if (message.code.length !== 0) {
            writer.uint32(50).bytes(message.code);
        }
        if (message.owner !== "") {
            writer.uint32(58).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(66).string(message.sender);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgEditOracleScript);
        message.code = new Uint8Array();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.schema = reader.string();
                    break;
                case 5:
                    message.sourceCodeUrl = reader.string();
                    break;
                case 6:
                    message.code = reader.bytes();
                    break;
                case 7:
                    message.owner = reader.string();
                    break;
                case 8:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgEditOracleScript);
        message.code = new Uint8Array();
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = long_1.default.fromString(object.oracleScriptId);
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
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
        if (object.code !== undefined && object.code !== null) {
            message.code = bytesFromBase64(object.code);
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.oracleScriptId !== undefined &&
            (obj.oracleScriptId = (message.oracleScriptId || long_1.default.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined &&
            (obj.sourceCodeUrl = message.sourceCodeUrl);
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgEditOracleScript);
        if (object.oracleScriptId !== undefined && object.oracleScriptId !== null) {
            message.oracleScriptId = object.oracleScriptId;
        }
        else {
            message.oracleScriptId = long_1.default.ZERO;
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
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = new Uint8Array();
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        return message;
    },
};
var baseMsgEditOracleScriptResponse = {};
exports.MsgEditOracleScriptResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgEditOracleScriptResponse);
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
        var message = __assign({}, baseMsgEditOracleScriptResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgEditOracleScriptResponse);
        return message;
    },
};
var baseMsgActivate = { validator: "" };
exports.MsgActivate = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgActivate);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgActivate);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgActivate);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        return message;
    },
};
var baseMsgActivateResponse = {};
exports.MsgActivateResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgActivateResponse);
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
        var message = __assign({}, baseMsgActivateResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgActivateResponse);
        return message;
    },
};
var baseMsgAddReporter = { validator: "", reporter: "" };
exports.MsgAddReporter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgAddReporter);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgAddReporter);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = String(object.reporter);
        }
        else {
            message.reporter = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgAddReporter);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = object.reporter;
        }
        else {
            message.reporter = "";
        }
        return message;
    },
};
var baseMsgAddReporterResponse = {};
exports.MsgAddReporterResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgAddReporterResponse);
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
        var message = __assign({}, baseMsgAddReporterResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgAddReporterResponse);
        return message;
    },
};
var baseMsgRemoveReporter = { validator: "", reporter: "" };
exports.MsgRemoveReporter = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgRemoveReporter);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseMsgRemoveReporter);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = String(object.reporter);
        }
        else {
            message.reporter = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgRemoveReporter);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        if (object.reporter !== undefined && object.reporter !== null) {
            message.reporter = object.reporter;
        }
        else {
            message.reporter = "";
        }
        return message;
    },
};
var baseMsgRemoveReporterResponse = {};
exports.MsgRemoveReporterResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgRemoveReporterResponse);
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
        var message = __assign({}, baseMsgRemoveReporterResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgRemoveReporterResponse);
        return message;
    },
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
    }
    MsgClientImpl.prototype.RequestData = function (request) {
        var data = exports.MsgRequestData.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "RequestData", data);
        return promise.then(function (data) {
            return exports.MsgRequestDataResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.ReportData = function (request) {
        var data = exports.MsgReportData.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "ReportData", data);
        return promise.then(function (data) {
            return exports.MsgReportDataResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.CreateDataSource = function (request) {
        var data = exports.MsgCreateDataSource.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "CreateDataSource", data);
        return promise.then(function (data) {
            return exports.MsgCreateDataSourceResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.EditDataSource = function (request) {
        var data = exports.MsgEditDataSource.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "EditDataSource", data);
        return promise.then(function (data) {
            return exports.MsgEditDataSourceResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.CreateOracleScript = function (request) {
        var data = exports.MsgCreateOracleScript.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "CreateOracleScript", data);
        return promise.then(function (data) {
            return exports.MsgCreateOracleScriptResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.EditOracleScript = function (request) {
        var data = exports.MsgEditOracleScript.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "EditOracleScript", data);
        return promise.then(function (data) {
            return exports.MsgEditOracleScriptResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.Activate = function (request) {
        var data = exports.MsgActivate.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "Activate", data);
        return promise.then(function (data) {
            return exports.MsgActivateResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.AddReporter = function (request) {
        var data = exports.MsgAddReporter.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "AddReporter", data);
        return promise.then(function (data) {
            return exports.MsgAddReporterResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    MsgClientImpl.prototype.RemoveReporter = function (request) {
        var data = exports.MsgRemoveReporter.encode(request).finish();
        var promise = this.rpc.request("oracle.v1.Msg", "RemoveReporter", data);
        return promise.then(function (data) {
            return exports.MsgRemoveReporterResponse.decode(new minimal_1.default.Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
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
