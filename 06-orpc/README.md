# oRPC (OpenAPI-Native Type-Safe RPC)

oRPC is a modern TypeScript RPC framework that combines end-to-end type safety with native OpenAPI support.

## What Makes oRPC Different

oRPC sits in a unique position: it offers the developer experience of tRPC (end-to-end type safety, no code generation) while also generating OpenAPI-compliant schemas automatically. This means you get:

- Type-safe clients without code generation
- Automatic OpenAPI documentation
- Schema validation with Zod (or other validators)
- Multi-runtime support (Node.js, Deno, Bun, Cloudflare Workers)

## How It Works

1. Define procedures with input schemas using Zod
2. Create a router that groups your procedures
3. Export the router type for client usage
4. Client imports the type and gets full autocomplete and type checking

## Running

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm run server
```

3. In another terminal, run the client:
```bash
npm run client
```

## Server Code

```typescript
import { os } from "@orpc/server";
import { z } from "zod";

const add = os
    .input(z.object({ a: z.number(), b: z.number() }))
    .handler(async ({ input }) => {
        return input.a + input.b;
    });

export const router = { add };
export type Router = typeof router;
```

## Client Code

```typescript
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { Router } from "./server.js";

const client = createORPCClient<Router>(link);
const result = await client.add({ a: 2, b: 3 });
```

## Trade-offs

- End-to-end type safety (like tRPC)
- Native OpenAPI support (unlike tRPC)
- Schema validation built-in with Zod
- Multi-runtime compatible
- Requires schema definitions (more explicit than tRPC)
- Newer framework, smaller community
