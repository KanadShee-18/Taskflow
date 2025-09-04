"use client";

import { DottedSeperator } from "@/components/dotted-seperator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, Loader, Workflow } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { createWorkspaceSchema } from "../schemas";

interface CreateWorkspaceFormProps {
  onCancel?: () => void;
}

export const WorkSpaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const router = useTransitionRouter();
  const { mutate, isPending } = useCreateWorkspace();

  const [invitationLink, setInvitationLink] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleJoinInvitation = () => {
    router.push(invitationLink);
  };

  const onFormSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    const finalValues = {
      ...values,
      image: values.image instanceof File ? values.image : "",
    };
    mutate(
      { form: finalValues },
      {
        onSuccess: ({ data }) => {
          form.reset();
          router.push(`/dashboard/workspaces/${data.$id}`);
        },
      }
    );
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto h-full border-none shadow-sm shadow-slate-400">
      <CardHeader className="flex p-6">
        <CardTitle className="text-xl flex gap-2 font-bold text-indigo-500">
          <Workflow />
          Create Your New Workspace
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DottedSeperator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-indigo-500">
                      Workspace Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Enter your workspace name"
                        className="shadow-sm font-medium tracking-wide text-indigo-600 shadow-slate-400"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-500 tracking-wide text-sm" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-5">
                      {field.value ? (
                        <div className="size-16 relative rounded-md overflow-hidden">
                          <Image
                            alt="Logo"
                            fill
                            className="object-cover"
                            src={
                              field.value instanceof File
                                ? URL.createObjectURL(field.value)
                                : field.value
                            }
                          />
                        </div>
                      ) : (
                        <Avatar className="size-16">
                          <AvatarFallback>
                            <ImageIcon className="size-9 text-indigo-400" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div className="flex flex-col mt-5">
                        <p className="text-sm text-indigo-500 font-semibold">
                          Workspce Icon
                        </p>
                        <p className="text-muted-foreground font-medium text-xs">
                          JPG, PNG, SVG or JPEG (max 1mb)
                        </p>
                        <input
                          className="hidden"
                          accept=".jpg, .png, .svg, .jpeg"
                          type="file"
                          disabled={isPending}
                          ref={inputRef}
                          onChange={handleImageChange}
                        />
                        {field.value ? (
                          <Button
                            type="button"
                            disabled={isPending}
                            variant={"destructive"}
                            size={"xs"}
                            className="w-full mt-2"
                            onClick={() => {
                              field.onChange(null);
                              if (inputRef.current) {
                                inputRef.current.value = "";
                              }
                            }}
                          >
                            Remove Image
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            disabled={isPending}
                            variant={"teritrary"}
                            size={"xs"}
                            className="w-full mt-2"
                            onClick={() => inputRef.current?.click()}
                          >
                            Upload Image
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="mt-7">
              <DottedSeperator />
            </div>
            <div className="flex items-center mt-10 w-full justify-between">
              <Button
                className={cn(!onCancel && "invisible")}
                type="button"
                variant={"outline"}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant={"primary"}
                className="tracking-wide"
              >
                {isPending ? "CREATING" : "CREATE WORKSPACE"}
                {isPending && (
                  <Loader className="!size-5 animate-spin text-indigo-100" />
                )}
              </Button>
            </div>
          </form>
        </Form>
        <div className="mt-14 mb-7 flex flex-col gap-y-2">
          <h2 className="font-semibold text-sm text-indigo-500">
            Aleady have an invite link?
          </h2>
          <Input
            onChange={(e) => setInvitationLink(e.target.value)}
            placeholder="Enter your invitation link here..."
          />
          <Button onClick={handleJoinInvitation} className="w-fit ml-auto">
            Join Workspace
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
