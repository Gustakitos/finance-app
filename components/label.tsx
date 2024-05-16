interface LabelProps {
  className: string;
}

export default function Label(props) {
  return (
    <>
      <label
        {...props}
        className={`text-gray-700 dark:text-gray-300 ${props.className}`}
      >
        {props.children}
      </label>
    </>
  );
}
