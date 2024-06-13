import { isEmpty } from "@/lib/utils/utils";
import { InputType } from "../lib/constants/constants";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType | string;
}
export default forwardRef<HTMLInputElement, InputProps>(function Input(
  props: InputProps,
  ref
) {
  const { type } = props;

  const styleType =
    type && isEmpty(type) ? (type as InputType) : InputType.default;

  const styles = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm disabled:opacity-75",
    default:
      "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75",
    file: "file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 file:dark:text-gray-400",
    text: "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950 disabled:opacity-75",
  };

  return <input ref={ref} {...props} className={`${styles[styleType]} ${props.className}`} />;
});
