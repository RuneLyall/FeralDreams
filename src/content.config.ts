import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const wiki = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/wiki" }),
    schema: z
        .object({
            title: z.string(),
            category: z.string(),
            tags: z.array(z.string()).default([]),
            hp: z.number().optional(),
            speed: z.number().optional(),
            strength: z.number().optional(),
            length: z.number(),
            isHostile: z.enum(["Yes", "No", "Variable"]),
            license: z.string().default("all-rights-reserved"),
            author: z.string().optional(),
        })

        .refine(
            (data) => {
                if (data.license !== "all-rights-reserved") {
                    return (
                        data.author !== undefined && data.author.trim() !== ""
                    );
                }
                return true;
            },
            {
                message:
                    "An author is required for attributed or Creative Commons licenses!",
                path: ["author"],
            },
        ),
});

export const collections = { wiki };
