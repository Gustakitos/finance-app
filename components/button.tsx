interface BtnProps {
  variant?: string;
  size?: string;
  children: React.ReactNode;
}

export default function Button(props: BtnProps) {
  const variants = {
    default: 'bg-black text-white dark:bg-white dark:text-black rounded-md hover:bg-gray-700 dark:hover:bg-gray-300',
    outline: 'border border-gray dark:border-gray-500 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500',
    ghost: 'rounded-md bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-500'
  };
  const sizes = {
    base: 'text-base px-4 py-2',
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    lg: 'text-lg px-4 py-2'
  };

  return <button 
    {...props} 
    className={
      `${props.variant ? 
          variants[props.variant] : 
          variants[variants.default]
        } 
    ${
      props.size ? sizes[props.size] : sizes[sizes.base]
    }
    `
  }
    >
      {props.children}
    </button>;
}
