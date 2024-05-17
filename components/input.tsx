import { InputType } from "./constants";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
}
export default function Input(props: InputProps) {
  const { type } = props;

  const styles = {
    checkbox:
      "rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm",
    default:
      "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950",
      text: "w-full rounder-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950"
  };

  return <input {...props} className={type ? styles[type] : styles.default} />;
}
