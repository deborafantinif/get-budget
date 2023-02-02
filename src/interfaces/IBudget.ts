import { z } from 'zod';

const budgetZodSchema = z.string({
  required_error: "budget is required",
  invalid_type_error: "budget must be a number",
});

type IBudget = z.infer<typeof budgetZodSchema>;

export { IBudget, budgetZodSchema };