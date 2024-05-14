import Trend from "@/components/trend";
import PageHeader from "../../components/page-header";
import { TrendEnum } from "@/components/constants";
import TransactionItem from "@/components/transaction-item";

export default function Playground() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">Page header</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader className="" />
        </div>
        <div>
          <h2 className="mb-4 text-lg font-mono">Trend</h2>
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <div className="flex space-x-8">
            <Trend type={TrendEnum.Income} amount={1000} prevAmount={900} />
            <Trend type={TrendEnum.Expense} amount={12000} prevAmount={10000} />
            <Trend
              type={TrendEnum.Investment}
              amount={7000}
              prevAmount={11100}
            />
            <Trend type={TrendEnum.Savings} amount={500} prevAmount={950} />
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
          <hr className="mb-4 border-gray-200 dark:border-gray-800" />
          <div className="space-y-4">
            <TransactionItem
              type={TrendEnum.Income}
              description="Income"
              amount={2000}
              category="Food"
            />
            <TransactionItem
              type={TrendEnum.Expense}
              description="Expense"
              amount={2000}
              category="Food"
            />
            <TransactionItem
              type={TrendEnum.Savings}
              description="Savings"
              amount={2000}
              category="Food"
            />
            <TransactionItem
              type={TrendEnum.Investment}
              description="Investment"
              amount={2000}
              category="Food"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
