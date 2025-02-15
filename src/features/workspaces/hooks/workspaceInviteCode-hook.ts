import { useParams } from "next/navigation";

export const useWorkspaceInviteCode = () => {
  const params = useParams();
  return params.inviteCode as string;
};
