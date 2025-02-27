import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { WorkspaceSettingsClient } from "./client";

const WorkspaceSettings = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    // <div className="relative h-full w-full md:max-w-lg flex items-center justify-center mx-auto">
    //   <EditWorkSpaceForm initialValues={initWorkspaceValues} />
    // </div>
    <WorkspaceSettingsClient />
  );
};

export default WorkspaceSettings;
