import { type TPhishingModuleApi } from "@botbye/node-core";
import { Request } from "@cloudflare/workers-types";
declare const phishingFactory: () => TPhishingModuleApi<Request>;
declare const phishing: TPhishingModuleApi<Request<unknown, import("@cloudflare/workers-types").CfProperties<unknown>>>;
export { phishing, phishingFactory, };
