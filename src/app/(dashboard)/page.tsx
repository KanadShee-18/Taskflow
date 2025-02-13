import { getCurrent } from "@/features/auth/actions";
import { WorkSpaceForm } from "@/features/workspaces/components/workspace-form";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div>
      <WorkSpaceForm />
    </div>
  );
}
