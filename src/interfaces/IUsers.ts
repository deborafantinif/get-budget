import { z } from 'zod';

const userZodSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    }),
  tax: z
    .number({
      required_error: "tax is required",
      invalid_type_error: "tax must be a number",
    })
    .gte(10, { message: "tax must be greater than or equal to 10" })
    .lte(200, { message: "tax must be greater than or equal to 15000" }),
});

type IUser = z.infer<typeof userZodSchema>;

export { IUser, userZodSchema };