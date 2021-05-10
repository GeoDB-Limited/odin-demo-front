"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgRemoveReporterResponse = exports.MsgRemoveReporter = exports.MsgAddReporterResponse = exports.MsgAddReporter = exports.MsgActivateResponse = exports.MsgActivate = exports.MsgEditOracleScriptResponse = exports.MsgEditOracleScript = exports.MsgCreateOracleScriptResponse = exports.MsgCreateOracleScript = exports.MsgEditDataSourceResponse = exports.MsgEditDataSource = exports.MsgCreateDataSourceResponse = exports.MsgCreateDataSource = exports.MsgReportDataResponse = exports.MsgReportData = exports.MsgRequestDataResponse = exports.MsgRequestData = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const oracle_1 = require("../../oracle/v1/oracle");
exports.protobufPackage = "oracle.v1";
const baseMsgRequestData = {
    oracleScriptId: long_1.default.ZERO,
    askCount: long_1.default.UZERO,
    minCount: long_1.default.UZERO,
    clientId: "",
    prepareGas: long_1.default.UZERO,
    executeGas: long_1.default.UZERO,
    sender: "",
};
exports.MsgRequestData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        for (const v of message.feeLimit) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRequestData);
        message.feeLimit = [];
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRequestData);
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
            for (const e of object.feeLimit) {
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
    toJSON(message) {
        const obj = {};
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
            obj.feeLimit = message.feeLimit.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
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
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRequestData);
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
            for (const e of object.feeLimit) {
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
const baseMsgRequestDataResponse = {};
exports.MsgRequestDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRequestDataResponse);
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
        const message = Object.assign({}, baseMsgRequestDataResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgRequestDataResponse);
        return message;
    },
};
const baseMsgReportData = {
    requestId: long_1.default.ZERO,
    validator: "",
    reporter: "",
};
exports.MsgReportData = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        for (const v of message.rawReports) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgReportData);
        message.rawReports = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgReportData);
        message.rawReports = [];
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = long_1.default.fromString(object.requestId);
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (const e of object.rawReports) {
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
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined &&
            (obj.requestId = (message.requestId || long_1.default.ZERO).toString());
        if (message.rawReports) {
            obj.rawReports = message.rawReports.map((e) => e ? oracle_1.RawReport.toJSON(e) : undefined);
        }
        else {
            obj.rawReports = [];
        }
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgReportData);
        message.rawReports = [];
        if (object.requestId !== undefined && object.requestId !== null) {
            message.requestId = object.requestId;
        }
        else {
            message.requestId = long_1.default.ZERO;
        }
        if (object.rawReports !== undefined && object.rawReports !== null) {
            for (const e of object.rawReports) {
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
const baseMsgReportDataResponse = {};
exports.MsgReportDataResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgReportDataResponse);
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
        const message = Object.assign({}, baseMsgReportDataResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgReportDataResponse);
        return message;
    },
};
const baseMsgCreateDataSource = {
    name: "",
    description: "",
    owner: "",
    sender: "",
};
exports.MsgCreateDataSource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executable.length !== 0) {
            writer.uint32(26).bytes(message.executable);
        }
        for (const v of message.fee) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateDataSource);
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
            for (const e of object.fee) {
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
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateDataSource);
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
            for (const e of object.fee) {
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
const baseMsgCreateDataSourceResponse = {};
exports.MsgCreateDataSourceResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateDataSourceResponse);
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
        const message = Object.assign({}, baseMsgCreateDataSourceResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateDataSourceResponse);
        return message;
    },
};
const baseMsgEditDataSource = {
    dataSourceId: long_1.default.ZERO,
    name: "",
    description: "",
    owner: "",
    sender: "",
};
exports.MsgEditDataSource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        for (const v of message.fee) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditDataSource);
        message.fee = [];
        message.executable = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEditDataSource);
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
            for (const e of object.fee) {
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
    toJSON(message) {
        const obj = {};
        message.dataSourceId !== undefined &&
            (obj.dataSourceId = (message.dataSourceId || long_1.default.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEditDataSource);
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
            for (const e of object.fee) {
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
const baseMsgEditDataSourceResponse = {};
exports.MsgEditDataSourceResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditDataSourceResponse);
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
        const message = Object.assign({}, baseMsgEditDataSourceResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgEditDataSourceResponse);
        return message;
    },
};
const baseMsgCreateOracleScript = {
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    owner: "",
    sender: "",
};
exports.MsgCreateOracleScript = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateOracleScript);
        message.code = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgCreateOracleScript);
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = Object.assign({}, baseMsgCreateOracleScript);
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
const baseMsgCreateOracleScriptResponse = {};
exports.MsgCreateOracleScriptResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreateOracleScriptResponse);
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
        const message = Object.assign({}, baseMsgCreateOracleScriptResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreateOracleScriptResponse);
        return message;
    },
};
const baseMsgEditOracleScript = {
    oracleScriptId: long_1.default.ZERO,
    name: "",
    description: "",
    schema: "",
    sourceCodeUrl: "",
    owner: "",
    sender: "",
};
exports.MsgEditOracleScript = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditOracleScript);
        message.code = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgEditOracleScript);
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
        const message = Object.assign({}, baseMsgEditOracleScript);
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
const baseMsgEditOracleScriptResponse = {};
exports.MsgEditOracleScriptResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgEditOracleScriptResponse);
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
        const message = Object.assign({}, baseMsgEditOracleScriptResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgEditOracleScriptResponse);
        return message;
    },
};
const baseMsgActivate = { validator: "" };
exports.MsgActivate = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgActivate);
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgActivate);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = String(object.validator);
        }
        else {
            message.validator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgActivate);
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = object.validator;
        }
        else {
            message.validator = "";
        }
        return message;
    },
};
const baseMsgActivateResponse = {};
exports.MsgActivateResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgActivateResponse);
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
        const message = Object.assign({}, baseMsgActivateResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgActivateResponse);
        return message;
    },
};
const baseMsgAddReporter = { validator: "", reporter: "" };
exports.MsgAddReporter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddReporter);
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgAddReporter);
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
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgAddReporter);
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
const baseMsgAddReporterResponse = {};
exports.MsgAddReporterResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgAddReporterResponse);
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
        const message = Object.assign({}, baseMsgAddReporterResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgAddReporterResponse);
        return message;
    },
};
const baseMsgRemoveReporter = { validator: "", reporter: "" };
exports.MsgRemoveReporter = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveReporter);
        while (reader.pos < end) {
            const tag = reader.uint32();
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
    fromJSON(object) {
        const message = Object.assign({}, baseMsgRemoveReporter);
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
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseMsgRemoveReporter);
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
const baseMsgRemoveReporterResponse = {};
exports.MsgRemoveReporterResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgRemoveReporterResponse);
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
        const message = Object.assign({}, baseMsgRemoveReporterResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgRemoveReporterResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RequestData(request) {
        const data = exports.MsgRequestData.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "RequestData", data);
        return promise.then((data) => exports.MsgRequestDataResponse.decode(new minimal_1.default.Reader(data)));
    }
    ReportData(request) {
        const data = exports.MsgReportData.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "ReportData", data);
        return promise.then((data) => exports.MsgReportDataResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateDataSource(request) {
        const data = exports.MsgCreateDataSource.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "CreateDataSource", data);
        return promise.then((data) => exports.MsgCreateDataSourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    EditDataSource(request) {
        const data = exports.MsgEditDataSource.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "EditDataSource", data);
        return promise.then((data) => exports.MsgEditDataSourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    CreateOracleScript(request) {
        const data = exports.MsgCreateOracleScript.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "CreateOracleScript", data);
        return promise.then((data) => exports.MsgCreateOracleScriptResponse.decode(new minimal_1.default.Reader(data)));
    }
    EditOracleScript(request) {
        const data = exports.MsgEditOracleScript.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "EditOracleScript", data);
        return promise.then((data) => exports.MsgEditOracleScriptResponse.decode(new minimal_1.default.Reader(data)));
    }
    Activate(request) {
        const data = exports.MsgActivate.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "Activate", data);
        return promise.then((data) => exports.MsgActivateResponse.decode(new minimal_1.default.Reader(data)));
    }
    AddReporter(request) {
        const data = exports.MsgAddReporter.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "AddReporter", data);
        return promise.then((data) => exports.MsgAddReporterResponse.decode(new minimal_1.default.Reader(data)));
    }
    RemoveReporter(request) {
        const data = exports.MsgRemoveReporter.encode(request).finish();
        const promise = this.rpc.request("oracle.v1.Msg", "RemoveReporter", data);
        return promise.then((data) => exports.MsgRemoveReporterResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
