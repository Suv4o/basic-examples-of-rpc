# gRPC (Strong Contracts, High Performance)

gRPC uses formal contracts defined in Protocol Buffers and binary transport for high performance.

## How It Works

1. Define a service contract in a `.proto` file
2. The proto file specifies the service methods and message types
3. Server implements the service
4. Client calls methods defined in the contract

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

## Contract (calculator.proto)

```protobuf
syntax = "proto3";

service Calculator {
  rpc Add (AddRequest) returns (AddResponse);
}

message AddRequest {
  int32 a = 1;
  int32 b = 2;
}

message AddResponse {
  int32 result = 1;
}
```

## Trade-offs

- Strong contracts
- Very fast (binary protocol)
- Language-agnostic
- More setup required
- Less browser-friendly
