import TransactionItem from "@/components/transaction-item";

export default async function TransactionsList() {
  const response = await fetch("http://localhost:3100/transactions");
  const transactions = await response.json();

  console.log("transactions: ", transactions);

  return (
    <section className="space-y-4">
      {transactions.map((transaction: any) => (
        <div key={transaction.id}>
          <TransactionItem 
            type={transaction.type} 
            amount={transaction.amount}
            description={transaction.description}
            category={transaction.category}
          />
        </div>
      ))}
    </section>
  );
}
