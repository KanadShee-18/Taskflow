import { getCurrent } from "@/features/auth/queries";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";
import { getProjectById } from "@/features/projects/queries";
import { redirect } from "next/navigation";
import React from "react";

interface ProjectIdPageProps {
  params: {
    projectId: string;
  };
}

const ProjectSettingsPage = async ({ params }: ProjectIdPageProps) => {
  const user = getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  const initialValues = await getProjectById({ projectId: params.projectId });

  if (!initialValues) {
    throw new Error("Project not found!");
  }

  return (
    <div className="relative h-full w-full md:max-w-lg flex items-center justify-center mx-auto">
      <EditProjectForm initialValues={initialValues} />
    </div>
  );
};

export default ProjectSettingsPage;
