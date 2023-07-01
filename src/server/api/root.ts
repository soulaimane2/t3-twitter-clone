import { createTRPCRouter } from "~/server/api/trpc";
import { tweetsRoutes } from "./tweets";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    tweet: tweetsRoutes
});

// export type definition of API
export type AppRouter = typeof appRouter;
