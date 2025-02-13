"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createWorkspaceSchema } from "../schemas";
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
import { ImageIcon, Loader, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useRef } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface CreateWorkspaceFormProps {
  onCancel?: () => void;
}

export const WorkSpaceForm = ({ onCancel }: CreateWorkspaceFormProps) => {
  const { mutate, isPending } = useCreateWorkspace();

  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof createWorkspaceSchema>>({
    resolver: zodResolver(createWorkspaceSchema),
    defaultValues: {
      name: "",
    },
  });

  const onFormSubmit = (values: z.infer<typeof createWorkspaceSchema>) => {
    const finalValues = {
      ...values,
      image: values.image instanceof File ? values.image : "",
    };
    mutate(
      { form: finalValues },
      {
        onSuccess: () => {
          form.reset();
          //TODO: redirect to our new workspace
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
    <Card className="w-full max-w-3xl mx-auto h-full border-none shadow-none">
      <CardHeader className="flex p-6">
        <CardTitle className="text-xl flex gap-2 font-bold text-indigo-500">
          <Workflow />
          Create Your New Workspace
        </CardTitle>
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
                        className="shadow-sm font-medium tracking-wide text-indigo-600 shadow-indigo-500"
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
              <Button type="button" variant={"outline"} onClick={onCancel}>
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
      </CardContent>
    </Card>
  );
};
