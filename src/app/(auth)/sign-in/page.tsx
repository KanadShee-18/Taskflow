import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { SignInCard } from "@/features/auth/components/sign-in-card";

const SignInPage = async () => {
  const user = await getCurrent();
  if (user) redirect("/dashboard");
  return (
    <div>
      <div className="relative">
        <SignInCard />
      </div>
    </div>
  );
};

export default SignInPage;
