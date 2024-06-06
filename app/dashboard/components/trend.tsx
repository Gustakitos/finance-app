import Trend from "@/components/trend";
import { TrendEnum } from "@/lib/constants/constants";
import { API_HOST } from "@/lib/constants/types";

export default async function TrendDashboard({ type }: { type: TrendEnum }) {
  const response = await fetch(`${API_HOST}/trends/${type}`);
  const { amount, prevAmount } = await response.json();

  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
}
