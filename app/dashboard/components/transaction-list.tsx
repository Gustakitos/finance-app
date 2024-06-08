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
  const [offset, setOffset] = useState(initialTransactions?.length);

  const groupedTransactions = groupAndSumTransactionsByDate(transactions);

  const handleClick = async () => {
    const nextTransactions = await fetchTransactions(range, offset, 10);
    setOffset((prevValue) => (prevValue ? prevValue + 10 : 0));
    setTransactions((prevTransactions) =>
      prevTransactions && nextTransactions
        ? [...prevTransactions, ...nextTransactions]
        : []
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
                  <TransactionItem {...transaction} />
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
