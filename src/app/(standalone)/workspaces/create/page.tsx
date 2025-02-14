import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { WorkSpaceForm } from "@/features/workspaces/components/workspace-form";

const WorkspaceCreate = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full lg:max-w-2xl">
      <div className="relative">
        <WorkSpaceForm />
      </div>
    </div>
  );
};

export default WorkspaceCreate;
