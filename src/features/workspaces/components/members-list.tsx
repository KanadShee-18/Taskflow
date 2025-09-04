"use client";

import { Link } from "next-view-transitions";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowLeftIcon, MoreVerticalIcon, NotebookPen } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { DottedSeperator } from "@/components/dotted-seperator";

import { useConfirm } from "@/hooks/user-confirmation-modal";
import { useWorkspaceId } from "../hooks/workspaceId-hook";

import { useGetMembers } from "@/features/member/api/use-get-members";
import { MemberAvatar } from "@/features/member/components/member-avatar";
import { useDeleteMember } from "@/features/member/api/use-delete-member";
import { useUpdateMember } from "@/features/member/api/use-update-member";
import { MemberRole } from "@/features/member/types";

export const MembersList = () => {
  const workspaceId = useWorkspaceId();
  const { data, isLoading: isMemberFetchingLoading } = useGetMembers({
    workspaceId,
  });

  const [DeleteMemberDialog, confirmDeleteMember] = useConfirm(
    "Remove Member",
    "This member will be removed from this workspace",
    "destructive"
  );

  const { mutate: updateMember, isPending: isUpdateMemberPending } =
    useUpdateMember();

  const { mutate: deleteMember, isPending: isDeleteMemberPending } =
    useDeleteMember();

  const handleUpdateMember = (memberId: string, role: MemberRole) => {
    updateMember({
      param: { memberId },
      json: { role },
    });
  };

  const handleDeleteMember = async (memberId: string) => {
    const ok = await confirmDeleteMember();
    if (!ok) return;

    deleteMember(
      { param: { memberId } },
      {
        onSuccess: () => {
          if (typeof window !== "undefined") {
            window.location.reload();
          }
        },
      }
    );
  };

  return (
    <div>
      <DeleteMemberDialog />
      <Card className="w-full h-full">
        <CardHeader className="flex flex-row items-center justify-between gap-x-6 p-7 space-y-0">
          <CardTitle className="text-xl flex items-center gap-2 lg:text-2xl font-bold text-indigo-500">
            <NotebookPen />
            Members List
          </CardTitle>
          <Button asChild size={"sm"} variant={"secondary"}>
            <Link href={"/dashboard"}>
              <ArrowLeftIcon className="size-4 mr-2" />
              Back
            </Link>
          </Button>
        </CardHeader>
        <div className="px-7">
          <DottedSeperator />
        </div>
        {isMemberFetchingLoading ? (
          <div className="p-7 space-y-3">
            {[...Array(3)].map((_, index) => (
              <Fragment key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <span className="w-10 h-10 rounded-full bg-slate-200 animate-pulse border-slate-400" />
                    <span className="flex gap-y-2 flex-col w-fit">
                      <p className="w-[150px] h-2 rounded-xl bg-slate-300 animate-pulse" />
                      <p className="w-[100px] h-1 p-1 rounded-xl bg-slate-300 animate-pulse" />
                    </span>
                  </div>
                  <span className="animate-pulse">
                    <MoreVerticalIcon className="w-4 h-4 text-slate-400" />
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        ) : (
          <CardContent className="p-7 space-y-3">
            {data?.documents.map((member, index) => (
              <Fragment key={member.$id}>
                <div className="flex items-center gap-2">
                  <MemberAvatar
                    className="size-10"
                    fallbackClassname="text-lg"
                    name={member?.name}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium ">
                      {member.name}

                      {member.role === MemberRole.ADMIN && (
                        <span className="mx-2 bg-indigo-300 px-2  rounded-2xl text-xs">
                          Admin
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground ">
                      {member.email}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="ml-auto" variant={"ghost"} size={"sm"}>
                        <MoreVerticalIcon className="!size-4 text-muted-foreground" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="end">
                      <DropdownMenuItem
                        className="font-medium text-slate-600 cursor-pointer hover:bg-indigo-100"
                        onClick={() =>
                          handleUpdateMember(member.$id, MemberRole.ADMIN)
                        }
                        disabled={isUpdateMemberPending}
                      >
                        Set as Administrator
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="font-medium text-slate-600 cursor-pointer hover:bg-indigo-100"
                        onClick={() =>
                          handleUpdateMember(member.$id, MemberRole.MEMBER)
                        }
                        disabled={isUpdateMemberPending}
                      >
                        Set as Member
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="font-medium text-rose-500 cursor-pointer hover:bg-indigo-100"
                        onClick={() => handleDeleteMember(member.$id)}
                        disabled={isDeleteMemberPending}
                      >
                        Remove {member.name}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {index < data.documents.length - 1 && <Separator />}
              </Fragment>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  );
};
