"use client";

import { SizesEnum } from "@/lib/constants/constants";
import Button from "./button";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className={"w-full"}
      size={SizesEnum.sm}
      disabled={pending}
    >
      {pending ? "Sending..." : "Sign In with Email"}
    </Button>
  );
}
