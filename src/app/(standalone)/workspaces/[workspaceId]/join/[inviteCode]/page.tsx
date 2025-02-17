import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";
import { InviteCodeClientPage } from "./client";

const WorkspaceIdJoinPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return <InviteCodeClientPage />;
};

export default WorkspaceIdJoinPage;
