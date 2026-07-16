import { type TModuleApi } from "@botbye/node-core";
import { Request } from "@cloudflare/workers-types";
declare const factory: () => TModuleApi<Request>;
declare const init: (options: import("@botbye/node-core").TInitOptions) => void, evaluate: (event: {
    type: "full";
    request: {
        ip: string;
        headers: Record<string, string>;
        token?: import("@botbye/node-core").TNullable<string>;
        requestMethod?: import("@botbye/node-core").TNullable<string>;
        requestUri?: import("@botbye/node-core").TNullable<string>;
    } | {
        request: Request<unknown, import("@cloudflare/workers-types").CfProperties<unknown>>;
        token?: import("@botbye/node-core").TNullable<string>;
    };
    event: {
        type: string;
        status: import("@botbye/node-core").TUpstreamEventStatus;
    };
    user: {
        accountId: string;
        username?: import("@botbye/node-core").TNullable<string>;
        email?: import("@botbye/node-core").TNullable<string>;
        phone?: import("@botbye/node-core").TNullable<string>;
    };
    customFields?: {
        [x: string]: string;
    };
} | {
    type: "risk";
    request: {
        request: Request<unknown, import("@cloudflare/workers-types").CfProperties<unknown>>;
        token?: import("@botbye/node-core").TNullable<string>;
    } | {
        ip: string;
        requestUri?: import("@botbye/node-core").TNullable<string>;
        token?: import("@botbye/node-core").TNullable<string>;
        requestMethod?: import("@botbye/node-core").TNullable<string>;
        headers?: import("@botbye/node-core").TRequestInfo["headers"];
    };
    event: {
        type: string;
        status: import("@botbye/node-core").TUpstreamEventStatus;
    };
    user: {
        accountId: string;
        username?: import("@botbye/node-core").TNullable<string>;
        email?: import("@botbye/node-core").TNullable<string>;
        phone?: import("@botbye/node-core").TNullable<string>;
    };
    customFields?: {
        [x: string]: string;
    };
    botbyeResult?: string;
} | {
    type: "validate";
    request: {
        ip: string;
        headers: Record<string, string>;
        token?: import("@botbye/node-core").TNullable<string>;
        requestMethod?: import("@botbye/node-core").TNullable<string>;
        requestUri?: import("@botbye/node-core").TNullable<string>;
    } | {
        request: Request<unknown, import("@cloudflare/workers-types").CfProperties<unknown>>;
        token?: import("@botbye/node-core").TNullable<string>;
    };
    customFields?: {
        [x: string]: string;
    };
}) => Promise<import("@botbye/node-core").TEvaluationResult>, dev: {
    setLoggerLevel(level: import("@botbye/node-core").TLoggerLevel): void;
    sendInitCall(): void;
    getLogger(): import("@botbye/node-core").TLogger;
};
export { init, evaluate, dev, factory, };
export { phishing, phishingFactory, } from "./phishing";
export type * from "@botbye/node-core";
