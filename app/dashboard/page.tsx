import { Suspense } from "react";
import TransactionsList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import Trend from "@/components/trend";
import { TrendEnum } from "@/components/constants";
import TrendDashboard from "./components/trend";

export default function Dashboard() {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense>
          <TrendDashboard type={TrendEnum.Income} />
        </Suspense>

        <Suspense>
          <TrendDashboard type={TrendEnum.Expense} />
        </Suspense>

        <Suspense>
          <TrendDashboard type={TrendEnum.Savings} />
        </Suspense>

        <Suspense>
          <TrendDashboard type={TrendEnum.Investment} />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionsList />
      </Suspense>
    </>
  );
}
