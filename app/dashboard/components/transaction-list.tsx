"use client";

import TransactionItem from "@/components/transaction-item";
import { Transaction } from "../../../lib/constants/types";
import TransactionSummaryItem from "@/components/transaction-summary-item";
import Separator from "@/components/separator";
import { groupAndSumTransactionsByDate } from "@/lib/utils/utils";
import { useState } from "react";
import { fetchTransactions } from "@/lib/actions";
import Button from "@/components/button";
import { VariantsEnum } from "@/lib/constants/constants";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function TransactionsList({
  range,
  initialTransactions,
}: {
  range: string;
  initialTransactions: Transaction[] | null;
}) {
  const [transactions, setTransactions] = useState<Transaction[] | null>(
    initialTransactions
  );

  const groupedTransactions = groupAndSumTransactionsByDate(transactions);

  const handleClick = async () => {
    const nextTransactions = await fetchTransactions(
      range,
      initialTransactions?.length,
      10
    );
    setTransactions((prevTransactions) =>
      prevTransactions && nextTransactions
        ? [...prevTransactions, ...nextTransactions]
        : []
    );
  };

  const handleRemoved = (id: string) => () => {
    setTransactions((prev) =>
      prev ? [...prev].filter((t) => t.id !== id) : []
    );
  };

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
                  <TransactionItem {...transaction} onRemoved={handleRemoved} />
                </div>
              ))}
            </section>
          </div>
        )
      )}
      <div className="flex justify-center">
        <Button variant={VariantsEnum.Ghost} onClick={handleClick}>
          Load More
        </Button>
      </div>
    </div>
  );
}
