import Link from "next/link";

export default function PageHeader({ className }: { className: string }) {
  return (
    <header className={`flex justify-between items-start ${className}`}>
      <Link
        href={"/dashboard"}
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance app
      </Link>

      <div className="flex items-center space-x-4">
        <div>Mode Toggle</div>
        <div>User Dropdown</div>
      </div>
    </header>
  );
}