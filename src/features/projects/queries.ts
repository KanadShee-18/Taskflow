import { createSessionClient } from "@/lib/appwrite";
import { getMember } from "../member/utils";
import { DATABASE_ID, PROJECTS_ID } from "@/utils/config";
import { Project } from "./types";

interface GetProjectProps {
  projectId: string;
}

export const getProjectById = async ({ projectId }: GetProjectProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const project = await databases.getDocument<Project>(
      DATABASE_ID,
      PROJECTS_ID,
      projectId
    );

    const isMember = await getMember({
      databases,
      userId: user.$id,
      workspaceId: project.workspaceId,
    });

    if (!isMember) return null;

    return project;
  } catch {
    return null;
  }
};
