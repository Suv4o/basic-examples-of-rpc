import http from "http";

http
  .createServer((req, res) => {
    if (req.method === "POST" && req.url === "/calculate") {
      let body = "";

      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const { a, b } = JSON.parse(body);
        res.end(JSON.stringify({ result: a + b }));
      });
    }
  })
  .listen(3000, () => {
    console.log("REST server running on http://localhost:3000");
  });
