import { DotterSeperator } from "@/components/dotted-seperator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export const SignInCard = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Card className="w-full h-full md:w-[450px] border-none shadow-none">
      <CardHeader className="text-center p-7 flex items-center justify-center">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
      </CardHeader>
      <div className="px-7">
        <DotterSeperator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            disabled={false}
            required
            type="email"
            name="email"
            // value={""}
            onChange={() => {}}
            placeholder="Enter email address"
            className="shadow-sm shadow-indigo-500 outline-none"
          />
          <div className="relative h-fit">
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-3 right-3 text-xl hover:cursor-pointer text-indigo-700 opacity-55 hover:opacity-100"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </span>
            <Input
              disabled={false}
              required
              type={showPassword ? "text" : "password"}
              name="password"
              // value={""}
              onChange={() => {}}
              placeholder="Enter your password"
              className="pr-12"
              min={8}
              max={256}
            />
          </div>

          <Button disabled={false} className="w-full tracking-wider">
            SIGN IN
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <DotterSeperator />
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
      </div>
    </Card>
  );
};
