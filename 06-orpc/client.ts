import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { Router } from "./server.js";

const link = new RPCLink({
    url: "http://127.0.0.1:3000",
});

const client = createORPCClient<Router>(link);

(async () => {
    const result = await client.add({ a: 2, b: 3 });
    console.log("Result:", result);
})();
