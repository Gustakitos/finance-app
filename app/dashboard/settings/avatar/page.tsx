"use client";

import Alert from "@/components/alert";
import AlertError from "@/components/alert-error";
import AlertSuccess from "@/components/alert-success";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { uploadAvatar } from "@/lib/actions";
import { Ban, Check } from "lucide-react";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
  error: false,
};

export default function Avatar() {
  const [state, formAction] = useFormState(uploadAvatar, initialState);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-8">Avatar</h1>
      <form className="space-y-4" action={formAction}>
        {state?.error ? <AlertError>{state?.message}</AlertError> : null}
        {!state?.error && state?.message.length > 0 ? (
          <AlertSuccess>{state?.message}</AlertSuccess>
        ) : null}
        <Input type="file" name="file" id="file" />
        <SubmitButton>Upload Avatar</SubmitButton>
      </form>
    </>
  );
}
