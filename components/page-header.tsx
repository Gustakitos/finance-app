import Link from "next/link";
import DarkModeToggle from "./dark-mode-toggle";
import useServerDarkMode from "@/hooks/useServerDarkMode";
import { createClient } from "@/lib/supabase/server";
import { sizes, variants } from "@/lib/variants";
import Button from "./button";
import { SizesEnum, VariantsEnum } from "@/lib/constants/constants";
import { CircleUser, KeyRound } from "lucide-react";
import SignOutButton from "./sign-out-button";

export default async function PageHeader({ className }: { className: string }) {
  const theme = useServerDarkMode();

  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log("user: ", user);
  console.log("error get user: ", error);

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
              <CircleUser className="w-6 h-6" />
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
