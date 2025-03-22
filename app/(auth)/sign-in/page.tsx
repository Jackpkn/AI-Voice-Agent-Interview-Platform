import AuthForm from "@/components/AuthForm";

export default function LoginPage({ type }: { type: FormType }) {
  return <AuthForm type="sign-in" />;
}
