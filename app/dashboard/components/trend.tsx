import Trend from "@/components/trend";
import { TrendEnum } from "@/lib/constants/constants";
import { createClient } from "@/lib/supabase/server";

export default async function TrendDashboard({ type }: { type: TrendEnum }) {
  const supabase = createClient()
  let { data, error } = await supabase
    .rpc('calculate_total', {
      type_arg: type
    })
  if (error) throw new Error("Could not fetch the trend data")
  const amount = data ?? 0

  return <Trend type={type} amount={amount} prevAmount={amount - 500} />;
}
