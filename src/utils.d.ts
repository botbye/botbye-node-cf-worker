import { type TRequestInfo, type TRequestInfoExtractor } from "@botbye/node-core";
import { Request } from "@cloudflare/workers-types";
declare const requestInfoExtractor: TRequestInfoExtractor<Request, TRequestInfo>;
export { requestInfoExtractor, };
