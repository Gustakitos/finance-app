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

export async function updateTransaction(id: string, formData: Transaction) {
  const valid = transactionSchema.safeParse(formData).success
  if (!valid) {
    throw new Error('Invalid data')
  }

  const { error } = await createClient().from('transactions')
    .update(formData)
    .eq('id', id)

  if (error) {
    throw new Error('Failed creating the transaction')
  }

  revalidatePath('/dashboard')
}

export async function fetchTransactions(range: string, offset = 0, limit = 10) {
  const supabase = createClient();
  let { data, error } = await supabase
    .rpc('fetch_transactions', {
      limit_arg: limit,
      offset_arg: offset,
      range_arg: range
    }).returns<Transaction[]>();

  if (error) throw new Error("We can't fetch transactions")
  return data
}

export async function deleteTransaction(id: string) {
  const supabase = createClient();
  const { error } = await supabase.from('transactions')
    .delete()
    .eq('id', id);

  if (error) throw new Error(`Could not delete the transaction ${id}`)
  revalidatePath('/dashboard')
}


export async function login(formData: any) {
  console.log(formData)
}