import { z } from 'zod'

export const todoSchema = z.object({
  id: z.string(),
  title: z
    .string()
    .min(4, {
      message: 'Title must be at least 4 characters',
    })
    .max(150, {
      message: 'Title must be less than 150 characters',
    }),
  description: z
    .string()
    .max(150, {
      message: 'Description must be less than 150 characters',
    })
    .optional(),
  completed: z.boolean().default(false),
})

export type Todo = z.infer<typeof todoSchema>
