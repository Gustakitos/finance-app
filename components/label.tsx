interface LabelProps {
  className?: string;
  htmlFor?: string;
  children: React.ReactNode;
}

export default function Label(props: LabelProps) {
  return (
    <>
      <label
        {...props}
        className={`text-gray-700 dark:text-gray-300 ${props.className}`}
      ></label>
    </>
  );
}
