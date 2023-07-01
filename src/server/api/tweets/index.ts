import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { prisma } from "~/server/db";

export const tweetsRoutes = createTRPCRouter({
    create: protectedProcedure
    .input(z.object({content: z.string()}))
    .mutation(async ({input: {content}, ctx}) => {
        console.log({content})
        const tweet = await ctx.prisma.tweet?.create({
            data: {
                content,
                userId: ctx.session.user.id,
            }
        })
        return tweet
    }),

    getAllTweets: publicProcedure.query(async ({ctx}) => {
        const tweets = await ctx.prisma.tweet.findMany()

        return tweets
    }),

    delete: protectedProcedure.input(z.object({id: z.string()})).mutation(async ({input: {id}, ctx}) => {
        const deletion = await ctx.prisma.tweet.delete({
            where: {
                id
            }
        })

        return true
    })
})