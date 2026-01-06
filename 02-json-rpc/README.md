# JSON-RPC (Same Idea, Standardized)

JSON-RPC adds structure — not new concepts.

## How It Works

JSON-RPC is a specification that defines a standard format for RPC messages. It includes:

- A version identifier (`jsonrpc: "2.0"`)
- A method name
- Parameters
- A request ID for matching responses

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

## Request Format

```json
{
  "jsonrpc": "2.0",
  "method": "add",
  "params": [2, 3],
  "id": 1
}
```

## Response Format

```json
{
  "jsonrpc": "2.0",
  "result": 5,
  "id": 1
}
```

## Trade-offs

- Clear rules
- Tooling support
- Still manual typing
- Still runtime errors
