import { isEmpty } from "@/lib/utils/utils";
import { InputType } from "../lib/constants/constants";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType | string;
}
export default forwardRef(function Input(props: InputProps, ref) {
  const { type } = props;

  const styleType = type && isEmpty(type) ? type : InputType.default;

  const styles = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
    default:
      "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
    text: "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
  };

  return <input {...props} className={styles[styleType]} ref={ref} />;
});
