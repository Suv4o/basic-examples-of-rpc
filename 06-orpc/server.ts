import { createServer } from "node:http";
import { os } from "@orpc/server";
import { RPCHandler } from "@orpc/server/node";
import { z } from "zod";

const add = os
    .input(z.object({ a: z.number(), b: z.number() }))
    .handler(async ({ input }) => {
        return input.a + input.b;
    });

export const router = {
    add,
};

export type Router = typeof router;

const handler = new RPCHandler(router);

const server = createServer(async (req, res) => {
    const result = await handler.handle(req, res, {
        context: {},
    });

    if (!result.matched) {
        res.statusCode = 404;
        res.end("No procedure matched");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("oRPC server running on http://127.0.0.1:3000");
});
