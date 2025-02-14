import { getCurrent } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import React from "react";

const WorkspceIdPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return <div>WorkspceIdPage</div>;
};

export default WorkspceIdPage;
