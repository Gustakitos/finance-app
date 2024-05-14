import { useMemo } from "react";
import { TrendEnum } from "./constants";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { useFormatCurrency } from "@/hooks/useFormatCurrency";

export default function Trend({
  type,
  amount,
  prevAmount,
}: {
  type: TrendEnum;
  amount: number;
  prevAmount: number;
}) {
  const colorClasses = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Savings: "text-yellow-700 dark:text-yellow-300",
  };

  const calcPercentageChange = (amount: number, prevAmount: number) => {
    if (prevAmount === 0) return 0;

    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => Number(calcPercentageChange(amount, prevAmount).toFixed(0)),
    [amount, prevAmount]
  );

  const formatAmount = useFormatCurrency(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {amount ? formatAmount : 0}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange <= 0 && (
          <ArrowDownLeft className="text-red-700 dark:text-red-300" />
        )}
        {percentageChange > 0 && (
          <ArrowUpRight className="text-green-700 dark:text-green-300" />
        )}
        <div>{percentageChange}% vs last period</div>
      </div>
    </div>
  );
}
