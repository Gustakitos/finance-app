import { fetchTransactions } from "@/lib/actions"
import TransactionList from "./transaction-list"

export default async function TransactionListWrapper({ range }: { range: string }) {
  const transactions = await fetchTransactions(range)
  return <TransactionList range={range} initialTransactions={transactions} />
}