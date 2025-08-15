[BotBye!](https://botbye.com)  
[BotBye! | Docs](https://botbye.com/docs)

# Cloudflare Worker BotBye! 

## Install

```bash
npm i botbye-node-cf-worker
```

or

```bash
yarn add botbye-node-cf-worker
```

## Usage

1. Init BotBye! with your `server-key`

```typescript
import { BotBye } from 'botbye-node-cf-worker'

const botbye = new BotBye({
    /* Use your server-key */
    serverKey: '00000000-0000-0000-0000-000000000000',
})
```

2. Use `validateRequest` where you need bot protection

```typescript
export default {
    async fetch(request, env, ctx): Promise<Response> {
        /* For api requests as example */
        if(request.url.includes("/api/")){
            /* Get token from header or any place you store it */
            const token = request.headers.get("x-botbye-token") ?? "";

            /* Additional custom fields for linking request */
            const customFields = {
                someKey: "some-value"
            }

            const botbyeResponse = await botbye.validateRequest({
                request,
                token,
                customFields,
            });
            
            const isAllowed = botbyeResponse.result?.isAllowed ?? true;

            /* Decline request when it not pass validation */
            if (!isAllowed) {
                return new Response('Forbidden', {
                    status: 403,
                    headers: { 'Content-Type': 'text/plain' }
                });
            }

            /* In other case process request as usual */
            return new Response("Hello world");
        }

        return new Response("Hello world");
    },
} satisfies ExportedHandler<Env>;
```

### Examples of BotBye API responses:

#### Bot detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": null
}
```

#### Bot not detected:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": true
  },
  "error": null
}
```

#### Request banned by custom rule:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": {
    "isAllowed": false
  },
  "error": {
    "message": "Banned by rule: MY_CUSTOM_RULE"
  }
}
```

#### Invalid `serverKey`:

```json
{
  "reqId": "f77b2abd-c5d7-44f0-be4f-174b04876583",
  "result": null,
  "error": {
    "message": "[BotBye] Bad Request: Invalid Server Key"
  }
}
```