import TransactionItem from "@/components/transaction-item";
import {
  GroupedTransactions,
  Transaction,
} from "../../../lib/constants/types";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Separator from "@/components/separator";
import { TrendEnum } from "@/lib/constants/constants";
import { createClient } from "@/lib/supabase/server";

const groupAndSumTransactionsByDate = (transactions: Transaction[] | null) => {
  const grouped: GroupedTransactions = {};

  for (const transaction of transactions!) {
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

  return grouped;
};

export default async function TransactionsList() {
  const supabase = createClient();
  const { data: transactions, error } = await supabase
    .from("transactions")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<Transaction[]>();

  const groupedTransaction = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-8">
      {Object.entries(groupedTransaction).map(
        ([date, { transactions, amount }]) => (
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            <section className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id}>
                  <TransactionItem {...transaction} />
                </div>
              ))}
            </section>
          </div>
        )
      )}
    </div>
  );
}
