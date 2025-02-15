"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateProjectSchema } from "../schemas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DotterSeperator } from "@/components/dotted-seperator";
import { Input } from "@/components/ui/input";
import {
  ArrowLeftIcon,
  CopyIcon,
  ImageIcon,
  Link,
  Loader,
  Trash2,
  UserRoundPen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Project } from "../types";
import { useUpdateProject } from "../api/use-update-project";
import { useConfirm } from "@/hooks/user-confirmation-modal";
import { toast } from "sonner";
import { useDeleteProject } from "../api/use-delete-project";

interface EditProjectFormProps {
  onCancel?: () => void;
  initialValues: Project;
}

export const EditProjectForm = ({
  onCancel,
  initialValues,
}: EditProjectFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useUpdateProject();
  const { mutate: deleteProject, isPending: isDeletionPending } =
    useDeleteProject();

  const [DialogForDelete, confirmDeleteAction] = useConfirm(
    "Delete this Project",
    "This action can't be undone!",
    "destructive"
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof updateProjectSchema>>({
    resolver: zodResolver(updateProjectSchema),
    defaultValues: {
      ...initialValues,
      image: initialValues.imageUrl ?? "",
    },
  });

  const handleDelete = async () => {
    const ok = await confirmDeleteAction();
    if (!ok) return;
    deleteProject(
      {
        param: {
          projectId: initialValues.$id,
        },
      },
      {
        onSuccess: () => {
          router.push(`/workspaces/${initialValues.workspaceId}`);
        },
      }
    );
  };

  const onFormSubmit = (values: z.infer<typeof updateProjectSchema>) => {
    const finalValues = {
      ...values,
      image: values.image instanceof File ? values.image : "",
    };
    mutate(
      { form: finalValues, param: { projectId: initialValues.$id } },
      {
        onSuccess: () => {
          form.reset();
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
    <div className="flex flex-col gap-y-4">
      <DialogForDelete />
      <Card className="w-full max-w-3xl mx-auto h-full">
        <CardHeader className="flex p-6 flex-row justify-between items-center">
          <CardTitle className="md:text-xl text-lg flex gap-2 font-bold text-indigo-500">
            <UserRoundPen />
            Update{" "}
            <p className="uppercase bg-gradient-to-br from-rose-500 via-slate-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-2xl">
              {initialValues.name}
            </p>
          </CardTitle>
          <Button
            onClick={
              onCancel
                ? onCancel
                : () =>
                    router.push(
                      `/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}`
                    )
            }
            size={"sm"}
            variant={"secondary"}
            className="group"
          >
            <ArrowLeftIcon className="!size-3 group-hover:-translate-x-1 duration-300 transition-all" />{" "}
            Back
          </Button>
        </CardHeader>
        <div className="px-7">
          <DotterSeperator />
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
                        Project Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Enter your project name"
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
                      <div className="flex items-center gap-x-5 md:gap-x-10">
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
                        <div className="flex flex-col">
                          <p className="text-sm text-indigo-500 font-semibold">
                            Project Icon
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
                <DotterSeperator />
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
                  size={"sm"}
                  type="submit"
                  variant={"primary"}
                  className="tracking-wide"
                >
                  {isPending ? "SAVING" : "SAVE CHANGES"}
                  {isPending && (
                    <Loader className="!size-5 animate-spin text-indigo-100" />
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="w-full h-full bg-rose-500/10 backdrop-blur-md">
        <CardContent className="p-7">
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-5 items-center">
              <div className="p-2 rounded-xl bg-rose-600/25 shadow-sm shadow-slate-950">
                <Trash2 className="size-7 text-rose-600" />
              </div>
              <div>
                <h3 className="font-bold text-rose-600">Danger Zone</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  You're going to delete this project which will remove all its
                  associated data related to this project
                </p>
              </div>
            </div>
            <DotterSeperator className="py-7" />
            <Button
              size={"sm"}
              className="ml-auto"
              variant={"destructive"}
              type="button"
              disabled={isPending}
              onClick={handleDelete}
            >
              {isDeletionPending ? "DELETING" : "Delete Project"}
              {isDeletionPending && <Loader className="animate-spin" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
