import { createTRPCRouter,  protectedProcedure } from "@/trpc/init";
import { db } from "@/db";
import { agents } from "@/db/schema";
import { agentsInsertSchema } from "../schema";
import Input from "@/components/ui/input";
import { z } from "zod";
import { eq } from "drizzle-orm";

export const agentsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [existingAgents] = await db
        .select()
        .from(agents)
        .where(eq(agents.id, input.id));

      return existingAgents;
    }),

  getMany: protectedProcedure.query(async () => {
    const data = await db
      .select()
      .from(agents);
    // await new Promise((resolve) => setTimeout(resolve, 4000));

    // throw new Error("test");
    return data;
  }),

  create: protectedProcedure
    .input(agentsInsertSchema)
    .mutation(async ({ input, ctx }) => {
      const [createdAgent] = await db
        .insert(agents)
        .values({
          name: input.name,
          instructions: input.instruction,
          userId: ctx.auth.user.id,
        })
        .returning();
      return createdAgent;
    }),
});
