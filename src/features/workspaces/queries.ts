import { Query } from "node-appwrite";

import { getMember } from "@/features/member/utils";

import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/utils/config";
import { Workspace } from "./types";
import { createSessionClient } from "@/lib/appwrite";

export const getWorkspaces = async () => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const members = await databases.listDocuments(DATABASE_ID, MEMBERS_ID, [
      Query.equal("userId", user.$id),
    ]);

    if (members.total === 0) {
      return { documents: [], total: 0 };
    }

    const workspaceIds = members.documents.map((member) => member.workspaceId);

    const workspaces = await databases.listDocuments(
      DATABASE_ID,
      WORKSPACES_ID,
      [Query.orderDesc("$createdAt"), Query.contains("$id", workspaceIds)]
    );

    return workspaces;
  } catch {
    return { documents: [], total: 0 };
  }
};

interface FetchSingleWorkspaceProps {
  workspaceId: string;
}

export const getWorkspaceById = async ({
  workspaceId,
}: FetchSingleWorkspaceProps) => {
  try {
    const { account, databases } = await createSessionClient();
    const user = await account.get();

    const isMember = await getMember({
      databases,
      userId: user.$id,
      workspaceId,
    });

    if (!isMember) return null;

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId
    );

    return workspace;
  } catch {
    return null;
  }
};

interface GetWorkspaceInfoForJoinProps {
  workspaceId: string;
}

export const getWorkspaceInfoForJoin = async ({
  workspaceId,
}: GetWorkspaceInfoForJoinProps) => {
  try {
    const { databases } = await createSessionClient();

    const workspace = await databases.getDocument<Workspace>(
      DATABASE_ID,
      WORKSPACES_ID,
      workspaceId
    );

    return { name: workspace.name };
  } catch {
    return null;
  }
};
