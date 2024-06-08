import { TrendEnum } from "../constants/constants";
import { GroupedTransactions, Transaction } from "../constants/types";

export const isEmpty = (str: string | undefined): boolean => 
  str ? str.trim().length === 0 : false;

export const groupAndSumTransactionsByDate = (transactions: Transaction[] | null) => {
  const grouped: GroupedTransactions = {};

  if (transactions) {
    for (const transaction of transactions) {
      const date = transaction.created_at.split("T")[0];
      if (!grouped[date]) {
        grouped[date] = { transactions: [], amount: 0 };
      }
  
      grouped[date].transactions.push(transaction);
      const amount =
        transaction.type === TrendEnum.Expense
          ? -transaction.amount
          : transaction.amount;
  
      grouped[date].amount += amount;
    }
  }

  return grouped;
};