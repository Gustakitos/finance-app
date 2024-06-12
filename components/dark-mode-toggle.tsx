"use client"

import Button from "./button";
import useDarkMode from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";
import { SizesEnum, VariantsEnum } from "../lib/constants/constants";

interface DarkModeToggleProps {
  defaultTheme?: string;
}

export default function DarkModeToggle({
  defaultTheme = "dark",
}: DarkModeToggleProps) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return (
    <Button
      variant={VariantsEnum.Ghost}
      size={SizesEnum.sm}
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Moon className="w-6 h-6" />
      ) : (
        <Sun className="w-6 h-6" />
      )}
    </Button>
  );
}
