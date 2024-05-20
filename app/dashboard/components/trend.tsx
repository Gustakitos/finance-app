import { TrendEnum } from "@/components/constants";
import Trend from "@/components/trend";

export default async function TrendDashboard({ type }: { type: TrendEnum }) {
  const response = await fetch(`http://localhost:3100/trends/${type}`);
  const { amount, prevAmount } = await response.json();

  return <Trend type={type} amount={amount} prevAmount={prevAmount} />;
}
