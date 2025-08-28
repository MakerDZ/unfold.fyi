import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';
import { authTables } from '@convex-dev/auth/server';

export default defineSchema({
    ...authTables,
    users: defineTable({
        name: v.optional(v.string()),
        image: v.optional(v.string()),
        email: v.string(),
        emailVerificationTime: v.optional(v.number()),

        isFreeTrial: v.boolean(),
        credit: v.number(),
    }).index('email', ['email']),

    letters: defineTable({
        userId: v.id('users'),
        title: v.string(),
        description: v.string(),
        sections: v.array(
            v.object({
                title: v.string(),
                reading: v.string(),
                files: v.array(
                    v.object({
                        url: v.string(),
                        type: v.union(v.literal('image'), v.literal('video')),
                        alt: v.string(),
                    })
                ),
            })
        ),
    }),
});
