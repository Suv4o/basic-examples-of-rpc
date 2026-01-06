# REST (A Different Mental Model)

REST doesn't think in functions. It thinks in resources.

Instead of:
```
add(2, 3)
```

You think:
```
"I am creating a calculation resource."
```

## How It Works

REST uses HTTP methods (GET, POST, PUT, DELETE) to operate on resources identified by URLs. The server exposes endpoints that represent resources or actions on resources.

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

## Request

```
POST /calculate
Content-Type: application/json

{
  "a": 2,
  "b": 3
}
```

## Response

```json
{
  "result": 5
}
```

## Trade-offs

- Human-readable
- Browser-friendly
- Cacheable
- Logic spread across endpoints
- Less "function-like"
