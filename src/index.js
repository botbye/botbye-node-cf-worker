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
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = exports.dev = exports.evaluate = exports.init = void 0;
var node_core_1 = require("@botbye/node-core");
var fetch_http_client_1 = require("@botbye/node-core/fetch-http-client");
var constants_1 = require("./constants");
var factory = function () {
    var base = (0, node_core_1.moduleApiFactory)({
        httpClient: fetch_http_client_1.fetchHttpClient,
        module: {
            name: constants_1.MODULE_NAME,
            version: constants_1.MODULE_VERSION,
        },
        skipInitCall: true,
        requestInfoExtractor: function (request, global) {
            var _a;
            try {
                var headers_1 = {};
                request.headers.forEach(function (value, key) {
                    headers_1[key] = value;
                });
                return {
                    ip: (_a = request.headers.get("CF-Connecting-IP")) !== null && _a !== void 0 ? _a : "0.0.0.0",
                    requestUri: new URL(request.url).pathname,
                    requestMethod: request.method,
                    headers: headers_1,
                };
            }
            catch (_b) {
                global.logger.warn("Not valid type of request passed. event.request.request should be an instance of CF Workers Request. Fallback value will be used");
                return {
                    ip: "0.0.0.0",
                    headers: {},
                };
            }
        },
    });
    var initWasSend = false;
    return __assign(__assign({}, base), { evaluate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!initWasSend) {
                base.dev.sendInitCall();
                initWasSend = true;
            }
            return base.evaluate.apply(base, args);
        } });
};
exports.factory = factory;
var _a = factory(), init = _a.init, evaluate = _a.evaluate, dev = _a.dev;
exports.init = init;
exports.evaluate = evaluate;
exports.dev = dev;
