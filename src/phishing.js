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
exports.phishingFactory = exports.phishing = void 0;
var node_core_1 = require("@botbye/node-core");
var phishing_fetch_http_client_1 = require("@botbye/node-core/phishing-fetch-http-client");
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var phishingFactory = function () {
    var base = (0, node_core_1.phishingModuleApiFactory)({
        httpClient: phishing_fetch_http_client_1.fetchPhishingHttpClient,
        module: {
            name: constants_1.MODULE_NAME,
            version: constants_1.MODULE_VERSION,
        },
        skipInitCall: true,
        catcherRequestInfoExtractor: utils_1.requestInfoExtractor,
    });
    var initWasSend = false;
    return __assign(__assign({}, base), { fetchCatcher: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!initWasSend) {
                base.dev.sendInitCall();
                initWasSend = true;
            }
            return base.fetchCatcher.apply(base, args);
        } });
};
exports.phishingFactory = phishingFactory;
var phishing = phishingFactory();
exports.phishing = phishing;
