"use client";

import { DotterSeperator } from "@/components/dotted-seperator";
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
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignInSchema } from "@/features/auth/schemas";
import { useLogin } from "@/features/auth/api/use-login";
import { ChevronRight, Loader } from "lucide-react";
import { signUpWithGithub, signUpWithGoogle } from "@/lib/oauth";

export const SignInCard = () => {
  const { mutate, isPending } = useLogin();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (values: z.infer<typeof SignInSchema>) => {
    mutate({ json: values });
  };

  return (
    <Card className="w-full h-full md:w-[450px]">
      <CardHeader className="text-center p-7 flex items-center justify-center">
        <CardTitle className="text-2xl text-indigo-600 font-semibold">
          Welcome Back
        </CardTitle>
      </CardHeader>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleFormSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-indigo-600 ">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      className="shadow-sm shadow-slate-400 outline-none"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-indigo-600 ">Password</FormLabel>
                  <FormControl>
                    <div className="relative h-fit">
                      <span
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute top-3 right-3 text-xl hover:cursor-pointer text-indigo-700 opacity-55 hover:opacity-100"
                      >
                        {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
                      </span>
                      <Input
                        {...field}
                        disabled={isPending}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter your password"
                        className="pr-12 shadow-sm shadow-slate-400"
                        min={8}
                        max={256}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-rose-500" />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full group tracking-wider">
              {isPending ? "SIGNING IN" : "SIGN IN"}
              {isPending ? (
                <Loader className="!size-5 animate-spin text-indigo-100" />
              ) : (
                <ChevronRight className="!size-5 group-hover:translate-x-2 duration-300 text-indigo-100" />
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="w-fit ml-auto px-7 mb-2">
        <Link
          href={"/sign-up"}
          className="text-sm font-medium text-muted-foreground hover:text-indigo-500 hover:underline cursor-pointer"
        >
          Don&apos;t have an account?
        </Link>
      </div>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          onClick={() => signUpWithGoogle()}
          className="w-full"
          disabled={false}
          variant={"secondary"}
          size={"lg"}
        >
          <FcGoogle className="mr-2 !size-6" />
          Login with Google
        </Button>
        <Button
          onClick={() => signUpWithGithub()}
          className="w-full"
          disabled={false}
          variant={"secondary"}
          size={"lg"}
        >
          <FaGithub className="mr-2 !size-6" />
          Login with Github
        </Button>
      </CardContent>
    </Card>
  );
};
