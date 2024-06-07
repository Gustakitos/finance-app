import { TrendEnum } from "./constants";

export interface Transaction {
  id: string;
  amount: number;
  type: TrendEnum;
  description: string;
  category: string;
  created_at: string;
}

export interface GroupedTransactions {
  [key: string]: DateGroup;
}

interface DateGroup {
  transactions: Transaction[];
  amount: number;
}