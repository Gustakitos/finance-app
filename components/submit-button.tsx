"use client";

import Button from "./button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(props: any) {
  const defaultText = props?.children || "Sign In with Email";

  const { pending } = useFormStatus();
  return (
    <Button
      className={`${props.className} flex flex-items-center justify-center space-x-1 w-full`}
      disabled={pending}
    >
      <span>{pending ? "Sending..." : defaultText}</span>
    </Button>
  );
}
