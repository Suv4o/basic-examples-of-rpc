import http from "http";

const methods: Record<string, (...args: number[]) => number> = {
  add: (a: number, b: number) => a + b,
};

http
  .createServer((req, res) => {
    let body = "";

    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      const { method, params, id } = JSON.parse(body);

      const result = methods[method](...params);

      res.end(
        JSON.stringify({
          jsonrpc: "2.0",
          result,
          id,
        })
      );
    });
  })
  .listen(3000, () => {
    console.log("JSON-RPC server running on http://localhost:3000");
  });
