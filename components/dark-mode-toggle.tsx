import Button from "./button";
import useDarkMode from "@/hooks/useDarkMode";
import { Moon, Sun } from "lucide-react";
import { SizesEnum, VariantsEnum } from "./constants";
import useServerDarkMode from "@/hooks/useServerDarkMode";

interface DarkModeToggleProps {
  defaultTheme?: string;
}

export default function DarkModeToggle({
  defaultTheme = "dark",
}: DarkModeToggleProps) {
  const theme = useServerDarkMode(defaultTheme);

  return (
    <Button
      variant={VariantsEnum.Ghost}
      size={SizesEnum.sm}
    >
      {theme === "dark" ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Sun className="w-4 h-4" />
      )}
    </Button>
  );
}
