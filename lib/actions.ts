'use server'
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";
import { Transaction } from "./constants/types";
import { transactionSchema } from "./validation";

export async function createTransaction(formData: Transaction) {
  const valid = transactionSchema.safeParse(formData).success;

  if (!valid) {
    throw new Error('Invalid data');
  }

  const { error } = await createClient().from('transactions').insert(formData);

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}