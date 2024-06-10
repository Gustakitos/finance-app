import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";
import { SizesEnum } from "@/lib/constants/constants";

export default function LoginForm() {
  return (
    <form action={login} className="space-y-2">
      <Input
        type="email"
        placeholder="name@example.com"
        name="email"
        required
      />
      <SubmitButton type="submit" size={SizesEnum.sm} className="w-full">
        Sign in with email
      </SubmitButton>
    </form>
  );
}
