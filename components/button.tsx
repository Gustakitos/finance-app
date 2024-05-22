import { MouseEventHandler } from "react";
import { SizesEnum, VariantsEnum } from "../lib/constants/constants";
import { sizes, variants } from "@/lib/variants";

interface BtnProps {
  variant?: VariantsEnum;
  size?: SizesEnum;
  children: React.ReactNode;

  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button(props: BtnProps) {
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
