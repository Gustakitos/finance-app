import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/useServerDarkMode";

export default function PageHeader({ className }: { className: string }) {
  const theme = useServerDarkMode();

  return (
    <header className={`flex justify-between items-start ${className}`}>
      <Link
        href={"/dashboard"}
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance app
      </Link>

      <div className="flex items-center space-x-4">
        <DarkModeToggle defaultTheme={theme} />
        <div>User Dropdown</div>
      </div>
    </header>
  );
}
