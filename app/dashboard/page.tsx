import { Suspense } from "react";
import TransactionsList from "./components/transaction-list";
import TransactionListFallback from "./components/transaction-list-fallback";
import TrendDashboard from "./components/trend";
import TrendFallback from "./components/trend-fallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { sizes, variants } from "@/lib/variants";
import { TrendEnum } from "@/lib/constants/constants";
import { createClient } from "@/lib/supabase/server";

export default function Dashboard() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold">Summary</h1>
      </section>

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
