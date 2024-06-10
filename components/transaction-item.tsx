import { useFormatCurrency } from "@/hooks/useFormatCurrency";
import {
  HandCoins,
  Landmark,
  Pencil,
  PiggyBank,
  Wallet,
} from "lucide-react";
import { TrendEnum } from "../lib/constants/constants";
import RemoveButton from "./remove-button";
import { sizes, variants } from "@/lib/variants";
import Link from "next/link";

export default function TransactionItem({
  id,
  type,
  category,
  description,
  amount,
  onRemoved,
}: {
  id: string;
  type: TrendEnum;
  category: string;
  description: string;
  amount: number;
  onRemoved: (id: string) => () => void;
}) {
  const formattedAmount = useFormatCurrency(amount);

  const typesMap = {
    Income: {
      icon: HandCoins,
      colors: "text-green-500 dark:text-green-400",
    },
    Expense: {
      icon: Wallet,
      colors: "text-red-500 dark:text-red-400",
    },
    Savings: {
      icon: PiggyBank,
      colors: "text-indigo-500 dark:text-indigo-400",
    },
    Investment: {
      icon: Landmark,
      colors: "text-yellow-500 dark:text-yellow-400",
    },
  };

  const IconComponent = typesMap[type].icon;
  const colors = typesMap[type].colors;

  return (
    <div className="w-full flex items-center">
      <div className="flex items-start mr-4 grow">
        <IconComponent className={`${colors} mr-2 w-4 h-4 hidden sm:block`} />
        <span>{description}</span>
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
          {category}
        </div>
      </div>

      <div className="min-w-[70px] flex justify-end">{formattedAmount}</div>

      <div className="min-w-[100px] flex justify-end">
        <Link
          href={`/dashboard/transaction/${id}/edit`}
          className={`${variants["ghost"]} ${sizes["xs"]}`}
        >
          <Pencil className="w-4 h-4" />
        </Link>
        <RemoveButton id={id} onRemoved={onRemoved} />
      </div>
    </div>
  );
}
