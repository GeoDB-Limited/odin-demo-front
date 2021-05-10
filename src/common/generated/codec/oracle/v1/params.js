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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var coin_1 = require("../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "oracle.v1";
var baseParams = {
    maxRawRequestCount: long_1.default.UZERO,
    maxAskCount: long_1.default.UZERO,
    expirationBlockCount: long_1.default.UZERO,
    baseOwasmGas: long_1.default.UZERO,
    perValidatorRequestGas: long_1.default.UZERO,
    samplingTryCount: long_1.default.UZERO,
    oracleRewardPercentage: long_1.default.UZERO,
    inactivePenaltyDuration: long_1.default.UZERO,
    maxDataSize: long_1.default.UZERO,
    maxCalldataSize: long_1.default.UZERO,
    dataRequesterFeeDenoms: "",
};
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (!message.maxRawRequestCount.isZero()) {
            writer.uint32(8).uint64(message.maxRawRequestCount);
        }
        if (!message.maxAskCount.isZero()) {
            writer.uint32(16).uint64(message.maxAskCount);
        }
        if (!message.expirationBlockCount.isZero()) {
            writer.uint32(24).uint64(message.expirationBlockCount);
        }
        if (!message.baseOwasmGas.isZero()) {
            writer.uint32(32).uint64(message.baseOwasmGas);
        }
        if (!message.perValidatorRequestGas.isZero()) {
            writer.uint32(40).uint64(message.perValidatorRequestGas);
        }
        if (!message.samplingTryCount.isZero()) {
            writer.uint32(48).uint64(message.samplingTryCount);
        }
        if (!message.oracleRewardPercentage.isZero()) {
            writer.uint32(56).uint64(message.oracleRewardPercentage);
        }
        if (!message.inactivePenaltyDuration.isZero()) {
            writer.uint32(64).uint64(message.inactivePenaltyDuration);
        }
        if (!message.maxDataSize.isZero()) {
            writer.uint32(72).uint64(message.maxDataSize);
        }
        if (!message.maxCalldataSize.isZero()) {
            writer.uint32(80).uint64(message.maxCalldataSize);
        }
        for (var _i = 0, _a = message.dataProviderRewardPerByte; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.DecCoin.encode(v, writer.uint32(90).fork()).ldelim();
        }
        for (var _b = 0, _c = message.dataRequesterFeeDenoms; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(98).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseParams);
        message.dataProviderRewardPerByte = [];
        message.dataRequesterFeeDenoms = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.maxRawRequestCount = reader.uint64();
                    break;
                case 2:
                    message.maxAskCount = reader.uint64();
                    break;
                case 3:
                    message.expirationBlockCount = reader.uint64();
                    break;
                case 4:
                    message.baseOwasmGas = reader.uint64();
                    break;
                case 5:
                    message.perValidatorRequestGas = reader.uint64();
                    break;
                case 6:
                    message.samplingTryCount = reader.uint64();
                    break;
                case 7:
                    message.oracleRewardPercentage = reader.uint64();
                    break;
                case 8:
                    message.inactivePenaltyDuration = reader.uint64();
                    break;
                case 9:
                    message.maxDataSize = reader.uint64();
                    break;
                case 10:
                    message.maxCalldataSize = reader.uint64();
                    break;
                case 11:
                    message.dataProviderRewardPerByte.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.dataRequesterFeeDenoms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseParams);
        message.dataProviderRewardPerByte = [];
        message.dataRequesterFeeDenoms = [];
        if (object.maxRawRequestCount !== undefined &&
            object.maxRawRequestCount !== null) {
            message.maxRawRequestCount = long_1.default.fromString(object.maxRawRequestCount);
        }
        else {
            message.maxRawRequestCount = long_1.default.UZERO;
        }
        if (object.maxAskCount !== undefined && object.maxAskCount !== null) {
            message.maxAskCount = long_1.default.fromString(object.maxAskCount);
        }
        else {
            message.maxAskCount = long_1.default.UZERO;
        }
        if (object.expirationBlockCount !== undefined &&
            object.expirationBlockCount !== null) {
            message.expirationBlockCount = long_1.default.fromString(object.expirationBlockCount);
        }
        else {
            message.expirationBlockCount = long_1.default.UZERO;
        }
        if (object.baseOwasmGas !== undefined && object.baseOwasmGas !== null) {
            message.baseOwasmGas = long_1.default.fromString(object.baseOwasmGas);
        }
        else {
            message.baseOwasmGas = long_1.default.UZERO;
        }
        if (object.perValidatorRequestGas !== undefined &&
            object.perValidatorRequestGas !== null) {
            message.perValidatorRequestGas = long_1.default.fromString(object.perValidatorRequestGas);
        }
        else {
            message.perValidatorRequestGas = long_1.default.UZERO;
        }
        if (object.samplingTryCount !== undefined &&
            object.samplingTryCount !== null) {
            message.samplingTryCount = long_1.default.fromString(object.samplingTryCount);
        }
        else {
            message.samplingTryCount = long_1.default.UZERO;
        }
        if (object.oracleRewardPercentage !== undefined &&
            object.oracleRewardPercentage !== null) {
            message.oracleRewardPercentage = long_1.default.fromString(object.oracleRewardPercentage);
        }
        else {
            message.oracleRewardPercentage = long_1.default.UZERO;
        }
        if (object.inactivePenaltyDuration !== undefined &&
            object.inactivePenaltyDuration !== null) {
            message.inactivePenaltyDuration = long_1.default.fromString(object.inactivePenaltyDuration);
        }
        else {
            message.inactivePenaltyDuration = long_1.default.UZERO;
        }
        if (object.maxDataSize !== undefined && object.maxDataSize !== null) {
            message.maxDataSize = long_1.default.fromString(object.maxDataSize);
        }
        else {
            message.maxDataSize = long_1.default.UZERO;
        }
        if (object.maxCalldataSize !== undefined &&
            object.maxCalldataSize !== null) {
            message.maxCalldataSize = long_1.default.fromString(object.maxCalldataSize);
        }
        else {
            message.maxCalldataSize = long_1.default.UZERO;
        }
        if (object.dataProviderRewardPerByte !== undefined &&
            object.dataProviderRewardPerByte !== null) {
            for (var _i = 0, _a = object.dataProviderRewardPerByte; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProviderRewardPerByte.push(coin_1.DecCoin.fromJSON(e));
            }
        }
        if (object.dataRequesterFeeDenoms !== undefined &&
            object.dataRequesterFeeDenoms !== null) {
            for (var _b = 0, _c = object.dataRequesterFeeDenoms; _b < _c.length; _b++) {
                var e = _c[_b];
                message.dataRequesterFeeDenoms.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.maxRawRequestCount !== undefined &&
            (obj.maxRawRequestCount = (message.maxRawRequestCount || long_1.default.UZERO).toString());
        message.maxAskCount !== undefined &&
            (obj.maxAskCount = (message.maxAskCount || long_1.default.UZERO).toString());
        message.expirationBlockCount !== undefined &&
            (obj.expirationBlockCount = (message.expirationBlockCount || long_1.default.UZERO).toString());
        message.baseOwasmGas !== undefined &&
            (obj.baseOwasmGas = (message.baseOwasmGas || long_1.default.UZERO).toString());
        message.perValidatorRequestGas !== undefined &&
            (obj.perValidatorRequestGas = (message.perValidatorRequestGas || long_1.default.UZERO).toString());
        message.samplingTryCount !== undefined &&
            (obj.samplingTryCount = (message.samplingTryCount || long_1.default.UZERO).toString());
        message.oracleRewardPercentage !== undefined &&
            (obj.oracleRewardPercentage = (message.oracleRewardPercentage || long_1.default.UZERO).toString());
        message.inactivePenaltyDuration !== undefined &&
            (obj.inactivePenaltyDuration = (message.inactivePenaltyDuration || long_1.default.UZERO).toString());
        message.maxDataSize !== undefined &&
            (obj.maxDataSize = (message.maxDataSize || long_1.default.UZERO).toString());
        message.maxCalldataSize !== undefined &&
            (obj.maxCalldataSize = (message.maxCalldataSize || long_1.default.UZERO).toString());
        if (message.dataProviderRewardPerByte) {
            obj.dataProviderRewardPerByte = message.dataProviderRewardPerByte.map(function (e) { return (e ? coin_1.DecCoin.toJSON(e) : undefined); });
        }
        else {
            obj.dataProviderRewardPerByte = [];
        }
        if (message.dataRequesterFeeDenoms) {
            obj.dataRequesterFeeDenoms = message.dataRequesterFeeDenoms.map(function (e) { return e; });
        }
        else {
            obj.dataRequesterFeeDenoms = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseParams);
        message.dataProviderRewardPerByte = [];
        message.dataRequesterFeeDenoms = [];
        if (object.maxRawRequestCount !== undefined &&
            object.maxRawRequestCount !== null) {
            message.maxRawRequestCount = object.maxRawRequestCount;
        }
        else {
            message.maxRawRequestCount = long_1.default.UZERO;
        }
        if (object.maxAskCount !== undefined && object.maxAskCount !== null) {
            message.maxAskCount = object.maxAskCount;
        }
        else {
            message.maxAskCount = long_1.default.UZERO;
        }
        if (object.expirationBlockCount !== undefined &&
            object.expirationBlockCount !== null) {
            message.expirationBlockCount = object.expirationBlockCount;
        }
        else {
            message.expirationBlockCount = long_1.default.UZERO;
        }
        if (object.baseOwasmGas !== undefined && object.baseOwasmGas !== null) {
            message.baseOwasmGas = object.baseOwasmGas;
        }
        else {
            message.baseOwasmGas = long_1.default.UZERO;
        }
        if (object.perValidatorRequestGas !== undefined &&
            object.perValidatorRequestGas !== null) {
            message.perValidatorRequestGas = object.perValidatorRequestGas;
        }
        else {
            message.perValidatorRequestGas = long_1.default.UZERO;
        }
        if (object.samplingTryCount !== undefined &&
            object.samplingTryCount !== null) {
            message.samplingTryCount = object.samplingTryCount;
        }
        else {
            message.samplingTryCount = long_1.default.UZERO;
        }
        if (object.oracleRewardPercentage !== undefined &&
            object.oracleRewardPercentage !== null) {
            message.oracleRewardPercentage = object.oracleRewardPercentage;
        }
        else {
            message.oracleRewardPercentage = long_1.default.UZERO;
        }
        if (object.inactivePenaltyDuration !== undefined &&
            object.inactivePenaltyDuration !== null) {
            message.inactivePenaltyDuration = object.inactivePenaltyDuration;
        }
        else {
            message.inactivePenaltyDuration = long_1.default.UZERO;
        }
        if (object.maxDataSize !== undefined && object.maxDataSize !== null) {
            message.maxDataSize = object.maxDataSize;
        }
        else {
            message.maxDataSize = long_1.default.UZERO;
        }
        if (object.maxCalldataSize !== undefined &&
            object.maxCalldataSize !== null) {
            message.maxCalldataSize = object.maxCalldataSize;
        }
        else {
            message.maxCalldataSize = long_1.default.UZERO;
        }
        if (object.dataProviderRewardPerByte !== undefined &&
            object.dataProviderRewardPerByte !== null) {
            for (var _i = 0, _a = object.dataProviderRewardPerByte; _i < _a.length; _i++) {
                var e = _a[_i];
                message.dataProviderRewardPerByte.push(coin_1.DecCoin.fromPartial(e));
            }
        }
        if (object.dataRequesterFeeDenoms !== undefined &&
            object.dataRequesterFeeDenoms !== null) {
            for (var _b = 0, _c = object.dataRequesterFeeDenoms; _b < _c.length; _b++) {
                var e = _c[_b];
                message.dataRequesterFeeDenoms.push(e);
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
