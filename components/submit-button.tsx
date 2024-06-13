"use client";

import { SizesEnum } from "@/lib/constants/constants";
import Button from "./button";
import { useFormStatus } from "react-dom";

export default function SubmitButton(props: any) {

  const defaultText = props?.children || "Sign In with Email";

  const { pending } = useFormStatus();
  return (
    <Button
      className={"w-full"}
      size={SizesEnum.sm}
      disabled={pending}
    >
      {pending ? "Sending..." : defaultText}
    </Button>
  );
}
