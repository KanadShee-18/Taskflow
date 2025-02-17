import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import React from "react";
import { ProjectSettingsClientPage } from "./client";

const ProjectSettingsPage = async () => {
  const user = getCurrent();
  if (!user) {
    redirect("/sign-in");
  }

  return <ProjectSettingsClientPage />;
};

export default ProjectSettingsPage;
