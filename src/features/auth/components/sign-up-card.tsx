import { DotterSeperator } from "@/components/dotted-seperator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUpFormSchema = z.object({
  name: z.string().min(6, {
    message: "Minimum 6 character name is required!",
  }),
  email: z.string().email({
    message: "Email address is required!",
  }),
  password: z.string().min(1, {
    message: "Minimum 8 characters password is required!",
  }),
});

export const SignUpCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onFormSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
    console.log("Values: ", values);
  };

  return (
    <Card className="w-full h-full md:w-[450px]">
      <CardHeader className="text-center p-7 flex items-center justify-center">
        <CardTitle className="text-2xl text-slate-800">Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href={"/privacy"}>
            <span className="text-indigo-700 hover:underline">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href={"/terms"}>
            <span className="text-indigo-700 hover:underline">
              Terms of Service
            </span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onFormSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-indigo-600 ">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="shadow-sm shadow-indigo-500 outline-none"
                    />
                  </FormControl>
                  <FormMessage className="text-rose-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-indigo-600 ">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      className="shadow-sm shadow-indigo-500 outline-none"
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
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter a strong password"
                        className="pr-12"
                        min={8}
                        max={256}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-rose-500" />
                </FormItem>
              )}
            />

            <Button disabled={false} className="w-full tracking-wider">
              SIGN UP
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="w-fit ml-auto px-7 mb-2">
        <Link
          href={"/sign-in"}
          className="text-sm font-medium text-muted-foreground hover:text-indigo-500 hover:underline cursor-pointer"
        >
          Already have an account?
        </Link>
      </div>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
          className="w-full"
          disabled={false}
          variant={"secondary"}
          size={"lg"}
        >
          <FcGoogle className="mr-2 !size-6" />
          Login with Google
        </Button>
        <Button
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
