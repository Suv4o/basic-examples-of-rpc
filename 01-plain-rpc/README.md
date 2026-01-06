# Plain RPC (No Standard, No Framework)

This is the most basic form of RPC:

- Send a method name
- Send parameters
- Execute it on the server

## How It Works

The server exposes a simple HTTP endpoint that accepts JSON with a `method` name and `params` array. It looks up the method and executes it with the provided parameters.

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
  "method": "add",
  "params": [2, 3]
}
```

## Response Format

```json
{
  "result": 5
}
```

## Trade-offs

- Works
- No rules
- No error handling
- No contracts

This is RPC at its rawest.
