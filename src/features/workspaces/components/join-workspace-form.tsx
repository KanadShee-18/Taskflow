"use client";

import { DotterSeperator } from "@/components/dotted-seperator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useJoinWorkspace } from "../api/use-join-workspace";
import { useWorkspaceInviteCode } from "../hooks/workspaceInviteCode-hook";
import { useWorkspaceId } from "../hooks/workspaceId-hook";
import { useRouter } from "next/navigation";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const router = useRouter();

  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useJoinWorkspace();
  const inviteCode = useWorkspaceInviteCode();

  const onInviteCodeSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
    <Card className="w-full max-w-md lg:max-w-xl mx-auto h-full">
      <CardHeader className="p-7 md:text-2xl text-xl">
        <CardTitle className="font-bold text-indigo-600">
          Join Workspace
        </CardTitle>
        <CardDescription className="flex text-center items-center gap-2">
          You&apos;ve been invited to join{" "}
          <strong className="text-indigo-500">{initialValues.name} </strong>
          workspace
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7">
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-between">
          <Button
            variant={"secondary"}
            type="button"
            asChild
            className="w-full lg:w-fit"
            disabled={isPending}
            size={"lg"}
          >
            <Link href={"/"}>Cancel</Link>
          </Button>
          <Button
            onClick={onInviteCodeSubmit}
            type="button"
            className="w-full lg:w-fit"
            disabled={isPending}
            size={"lg"}
          >
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
