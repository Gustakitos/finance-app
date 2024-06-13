import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/useServerDarkMode";
import { createClient } from "@/lib/supabase/server";
import { sizes, variants } from "@/lib/variants";
import { SizesEnum, VariantsEnum } from "@/lib/constants/constants";
import { KeyRound } from "lucide-react";
import SignOutButton from "./sign-out-button";
import Avatar from "./avatar";

export default async function PageHeader({ className }: { className: string }) {
  const theme = useServerDarkMode();

  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <header className={`flex justify-between items-start ${className}`}>
      <Link
        href={"/dashboard"}
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance app
      </Link>

      <div className="flex items-center">
        <DarkModeToggle defaultTheme={theme} />
        {user ? (
          <>
            <Link
              href={"/dashboard/settings"}
              className={`flex items-center space-x-1 ${
                variants[VariantsEnum.Ghost]
              } ${sizes[SizesEnum.sm]}`}
            >
              <Avatar /> 
              <span>{user?.email}</span>
            </Link>
            <SignOutButton />
          </>
        ) : (
          <Link href="/login" className={`${variants["ghost"]} ${sizes["sm"]}`}>
            <KeyRound className="w-6 h-6" />
          </Link>
        )}
      </div>
    </header>
  );
}
