# A Remote Procedure Call (RPC): From Simple to Modern

RPC sounds complex, but the idea is tiny:

**Call a function that lives on another machine.**

To make this concrete, we build the same example six times: a remote function called `add(a, b)`.

Each step adds structure — not complexity.

## The Example We Use Everywhere

```
add(2, 3) → 5
```

That's it.

## Examples

| Folder | Approach | What It Adds |
|--------|----------|--------------|
| [01-plain-rpc](./01-plain-rpc) | Plain RPC | Core idea |
| [02-json-rpc](./02-json-rpc) | JSON-RPC | Structure & rules |
| [03-grpc](./03-grpc) | gRPC | Contracts & performance |
| [04-trpc](./04-trpc) | tRPC | Type safety & developer speed |
| [05-rest](./05-rest) | REST | Resource-based mental model |
| [06-orpc](./06-orpc) | oRPC | Type safety & OpenAPI support |

## Quick Start

Each example can be run independently:

```bash
# Navigate to any example folder
cd 01-plain-rpc

# Install dependencies
npm install

# Start the server
npm run server

# In another terminal, run the client
npm run client
```

## Comparison

| Approach | Pros | Cons |
|----------|------|------|
| Plain RPC | Works, simple | No rules, no error handling, no contracts |
| JSON-RPC | Clear rules, tooling support | Manual typing, runtime errors |
| gRPC | Strong contracts, very fast, language-agnostic | More setup, less browser-friendly |
| tRPC | End-to-end type safety, no API duplication | TypeScript-only |
| REST | Human-readable, browser-friendly, cacheable | Logic spread across endpoints, less function-like |
| oRPC | Type safety + OpenAPI, multi-runtime | Newer, requires schema definitions |

## The Big Takeaway

RPC doesn't change.

Only the discipline around it does.

Every system above does the same thing:

```
add(2, 3)
```

They just disagree on:

- How strict the rules are
- Who enforces them
- How much the developer should think

## Tech Stack

All examples use:

- TypeScript
- Node.js with ESM modules
- [tsx](https://github.com/privatenumber/tsx) for running TypeScript directly
