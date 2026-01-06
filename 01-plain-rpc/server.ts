import http from "http";

const methods: Record<string, (...args: number[]) => number> = {
    add: (a: number, b: number) => a + b,
};

http.createServer((req, res) => {
    let body = "";

    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
        const { method, params } = JSON.parse(body);
        const result = methods[method](...params);

        res.end(JSON.stringify({ result }));
    });
}).listen(3000, () => {
    console.log("Plain RPC server running on http://localhost:3000");
});
