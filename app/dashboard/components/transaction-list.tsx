import TransactionItem from "@/components/transaction-item";
import { Transaction } from "../../../lib/constants/types";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Separator from "@/components/separator";
import { createClient } from "@/lib/supabase/server";
import { groupAndSumTransactionsByDate } from "@/lib/utils/utils";

export default async function TransactionsList({ initialTransactions } :{ initialTransactions: Transaction[] | null; }) {
  const groupedTransactions = groupAndSumTransactionsByDate(initialTransactions)

  return (
    <div className="space-y-8">
      {Object.entries(groupedTransactions).map(
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
