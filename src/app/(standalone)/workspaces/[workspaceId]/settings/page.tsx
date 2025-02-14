import React from "react";

import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { getWorkspaceById } from "@/features/workspaces/queries";
import { EditWorkSpaceForm } from "@/features/workspaces/components/edit-workspace-form";

interface SingleWorkspaceSettingsProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceSettings = async ({ params }: SingleWorkspaceSettingsProps) => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  const initWorkspaceValues = await getWorkspaceById({
    workspaceId: params.workspaceId,
  });

  if (!initWorkspaceValues) {
    redirect(`/workspaces/${params.workspaceId}`);
  }

  return (
    <div className="relative h-full w-full md:max-w-lg flex items-center justify-center mx-auto">
      <EditWorkSpaceForm initialValues={initWorkspaceValues} />
    </div>
  );
};

export default WorkspaceSettings;
