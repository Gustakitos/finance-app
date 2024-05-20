import Skeleton from "@/components/skeleton";

export default function TransactionListFallback() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
    </div>
  );
}

function TransactionItemSkeleton() {
  return (
    <div className="w-full flex items-center space-x-4">
      <div className="flex items-start grow">
        <Skeleton />
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        <div className="rounded-md text-xs bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-black px-2 py-0.5">
          <Skeleton />
        </div>
      </div>

      <div className="min-w-[70px] flex justify-end">
        <Skeleton />
      </div>

      <div className="min-w-[50px] flex justify-end">
        <Skeleton />
      </div>
    </div>
  );
}

function TransactionSummaryItemSkeleton() {
  return (
    <div className="flex space-x-4">
      <div className="grow">
        <Skeleton />
      </div>

      <div className="min-w-[70px]">
        <Skeleton />
      </div>

      <div className="min-w-[50px] flex justify-end"></div>
    </div>
  );
}
