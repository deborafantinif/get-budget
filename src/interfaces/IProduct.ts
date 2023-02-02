import { z } from 'zod';

const productZodSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
    .min(10, { message: "name must be at least 10 characters" })
    .max(200, { message: "name must be a maximum of 200 characters" }),
  price: z
    .number({
      required_error: "price is required",
      invalid_type_error: "price must be a number",
    })
    .gte(10, { message: "price must be greater than or equal to 10" })
    .lte(15000, { message: "price must be greater than or equal to 15000" }),
});

type IProduct = z.infer<typeof productZodSchema>;

export { IProduct, productZodSchema };