import { z } from "zod";
import { Categories, TrendEnum } from "./constants/constants";

export const transactionSchema = z.object({
  type: z.enum([TrendEnum.Income, TrendEnum.Expense, TrendEnum.Investment, TrendEnum.Savings]),
  category: z.enum([
    Categories.Education,
    Categories.Food,
    Categories.Health,
    Categories.Housing,
    Categories.Other,
    Categories.Transport
  ]),
  amount: z.coerce.number().min(1, {
    message: "Amount must be at least 1"
  }),
  description: z.string().min(1, {
    message: "The description is required"
  }),
  created_at: z.string().refine(val => !isNaN(Date.parse(val)), {
    message: "Data needs to contain a valid date"
  })
});