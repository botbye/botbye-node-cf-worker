import { type TBotByeInitOptions as TBotByeInitOptionsCore, type TBotByeResponse, type TValidateRequestOptions as TValidateRequestOptionsCore } from "botbye-node-core";
type TCfRequest = Request;
type TValidateRequestOptions = Omit<TValidateRequestOptionsCore, "requestInfo" | "headers"> & {
	request: TCfRequest;
};
type TBotByeInitOptions = TBotByeInitOptionsCore & {
	url?: string;
};
export default class BotBye {
	private serverKey;
	private url;
	private initedSend;
	constructor(options: TBotByeInitOptions);
	validateRequest(options: TValidateRequestOptions): Promise<TBotByeResponse>;
	private getFallbackResponse;
	private makeRequest;
	private sendInitRequest;
	private extractHeaders;
	private extractIp;
}
export { BotBye, };
export type { TValidateRequestOptions, TBotByeResponse, TBotByeInitOptions, };
