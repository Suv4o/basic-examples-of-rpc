import { initTRPC } from "@trpc/server";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const t = initTRPC.create();

const appRouter = t.router({
  add: t.procedure
    .input((v: unknown) => v as [number, number])
    .query(({ input }) => {
      const [a, b] = input;
      return a + b;
    }),
});

export type AppRouter = typeof appRouter;

createHTTPServer({ router: appRouter }).listen(3000);

console.log("tRPC server running on http://localhost:3000");
