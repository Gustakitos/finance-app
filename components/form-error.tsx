import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

export default function FormError(
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
) {
  return error?.error ? <p className="mt-1 text-red-500">{error.error?.message}</p> : null;
}
