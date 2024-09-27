import { z } from "zod";

// Define a schema for the duration
const durationSchema = z.object({
  days: z.number(),
  hours: z.number(),
  minutes: z.number(),
});

export type Duration = z.infer<typeof durationSchema>;

export const conversationSchema = z.object({
  chat_id: z.string(),
  conversation_duration_secs: z.number(),
  number_of_messages: z.number(),
  conversation_start_time: z
    .string()
    .refine((data) => !isNaN(Date.parse(data)), {
      message: "chat_start_time must be a valid ISO date string",
    }),
  engagement_level: z.enum(["low", "medium", "high", "very_high"]),

});

// Infer the type from the schema
export type Conversation = z.infer<typeof conversationSchema>;


