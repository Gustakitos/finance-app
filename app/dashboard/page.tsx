import { Suspense } from "react";
import TransactionsList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import TrendDashboard from "./components/trend";
import TrendFallback from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { TrendEnum } from "@/lib/constants/constants";
import { ErrorBoundary } from "react-error-boundary";
import Range from "./components/range";

export default function Dashboard() {
  const trendValues = Object.values(TrendEnum);

  return (
    <>
      <section className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Summary</h1>
        <aside>
          <Range />
        </aside>
      </section>

      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {trendValues.map(type => (
          <ErrorBoundary key={type} fallback={<div className="text-red-500">Cannot fetch {type} trend data</div>}>
            <Suspense fallback={<TrendFallback />}>
              <TrendDashboard type={type} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </section>

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl">Transactions</h2>
        <Link
          href={"/dashboard/transaction/add"}
          className={`flex items-center space-x-1 ${variants["outline"]} ${sizes["sm"]}`}
        >
          <PlusCircle className="w-4 h-4" />
          <div>Add</div>
        </Link>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionsList />
      </Suspense>
    </>
  );
}
