import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const def = protoLoader.loadSync("calculator.proto");
const proto = grpc.loadPackageDefinition(def) as any;

const client = new proto.Calculator(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.Add({ a: 2, b: 3 }, (_: any, res: any) => {
  console.log("Result:", res.result);
});
