# tRPC (Modern TypeScript RPC)

tRPC keeps the RPC model but removes boilerplate.

No schemas. No clients. Just TypeScript.

## How It Works

1. Define a router with procedures on the server
2. Export the router type
3. Import the type in the client for full type inference
4. Call procedures as if they were local functions

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
const appRouter = t.router({
  add: t.procedure
    .input((v: unknown) => v as [number, number])
    .query(({ input }) => {
      const [a, b] = input;
      return a + b;
    }),
});

export type AppRouter = typeof appRouter;
```

## Client Code

```typescript
const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "http://localhost:3000" })],
});

const result = await client.add.query([2, 3]);
```

## Trade-offs

- End-to-end type safety
- No API duplication
- Feels like local functions
- TypeScript-only
