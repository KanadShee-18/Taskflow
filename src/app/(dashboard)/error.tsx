"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-2 items-center">
      <div className="fixed w-full h-full flex flex-col items-center pt-44">
        <div className="w-1/2 top-0 left-0 absolute h-1/2 bg-indigo-200 z-0 blur-[240px]" />
        <div className="flex flex-col gap-y-4 items-center z-10 shadow-md shadow-slate-400 p-4 rounded-lg bg-indigo-100 bg-opacity-15 backdrop-blur-xl">
          <div className="flex flex-row gap-4 items-center text-rose-500">
            <AlertTriangle className="size-10" />
            <p className="text-sm md:text-xl md:font-semibold">
              Something went wrong!
            </p>
          </div>
          <Button variant={"secondary"} size={"sm"} asChild>
            <Link href={"/"}>Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
