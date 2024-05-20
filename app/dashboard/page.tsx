import { Suspense } from "react";
import TransactionsList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";

export default function Dashboard() {
  return (
    <>
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionsList />
    </Suspense>
    </>
  )
}
