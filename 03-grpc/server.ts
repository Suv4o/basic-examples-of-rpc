import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const def = protoLoader.loadSync("calculator.proto");
const proto = grpc.loadPackageDefinition(def) as any;

const server = new grpc.Server();

server.addService(proto.Calculator.service, {
  Add: (call: any, cb: any) => {
    const { a, b } = call.request;
    cb(null, { result: a + b });
  },
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("gRPC server running on 0.0.0.0:50051");
  }
);
