import { Suspense } from "react";
import TransactionsList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import { TrendEnum } from "@/components/constants";
import TrendDashboard from "./components/trend";
import TrendFallback from "./components/trend-fallback";

export default function Dashboard() {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type={TrendEnum.Income} />
        </Suspense>

        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type={TrendEnum.Expense} />
        </Suspense>

        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type={TrendEnum.Savings} />
        </Suspense>

        <Suspense fallback={<TrendFallback />}>
          <TrendDashboard type={TrendEnum.Investment} />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionsList />
      </Suspense>
    </>
  );
}
