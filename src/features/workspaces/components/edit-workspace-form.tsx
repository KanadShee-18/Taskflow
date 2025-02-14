"use client";

import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { updateWorkspaceSchema } from "../schemas";
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
import { ArrowLeftIcon, ImageIcon, Loader, UserRoundPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Workspace } from "../types";
import { useUpdateWorkspace } from "../api/use-update-workspace";

interface EditWorkspaceFormProps {
  onCancel?: () => void;
  initialValues: Workspace;
}

export const EditWorkSpaceForm = ({
  onCancel,
  initialValues,
}: EditWorkspaceFormProps) => {
  const router = useRouter();
  const { mutate, isPending } = useUpdateWorkspace();

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof updateWorkspaceSchema>>({
    resolver: zodResolver(updateWorkspaceSchema),
    defaultValues: {
      ...initialValues,
      image: initialValues.imageUrl ?? "",
    },
  });

  const onFormSubmit = (values: z.infer<typeof updateWorkspaceSchema>) => {
    const finalValues = {
      ...values,
      image: values.image instanceof File ? values.image : "",
    };
    mutate(
      { form: finalValues, param: { workspaceId: initialValues.$id } },
      {
        onSuccess: ({ data }) => {
          form.reset();
          //NOTE: redirect to our new workspace after creation
          router.push(`/workspaces/${data.$id}`);
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
              : () => router.push(`/workspaces/${initialValues.$id}`)
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
  );
};
