import { MouseEventHandler } from "react";
import { SizesEnum, VariantsEnum } from "./constants";

interface BtnProps {
  variant?: VariantsEnum;
  size?: SizesEnum;
  children: React.ReactNode;

  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Button(props: BtnProps) {
  const variants = {
    default:
      "bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300",
    outline:
      "border border-gray dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500",
    ghost:
      "rounded-md bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500",
  };
  const sizes = {
    base: "text-base px-4 py-2",
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    lg: "text-lg px-4 py-2",
  };

  return (
    <button
      {...props}
      onClick={props.onClick}
      className={`${
        props.variant ? variants[props.variant] : variants[VariantsEnum.Default]
      } 
    ${props.size ? sizes[props.size] : sizes[SizesEnum.base]}
    `}
    >
      {props.children}
    </button>
  );
}
