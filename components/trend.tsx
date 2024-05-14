import { TrendEnum } from "./constants";

export default function Trend({
  type,
  amount,
  prevAmount,
}: {
  type: TrendEnum;
  amount: number | undefined;
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

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {amount ? formatCurrency(amount) : formatCurrency(0)}
      </div>
    </div>
  );
}
