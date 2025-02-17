"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ErrorPageProps {
  message?: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  return (
    <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
      <div className="fixed w-full h-full flex flex-col items-center justify-center">
        <div className="w-1/2 top-0 left-0 absolute h-1/2 bg-gradient-to-br from-indigo-700 to-rose-500 z-0 blur-[240px]" />
        <Image
          src={"/oops.png"}
          alt="OOPS"
          width={300}
          height={30}
          className="w-[300px] md:w-[500px] h-auto z-10"
          quality={100}
        />
        <div className="flex flex-col gap-y-4 items-center z-10 border border-rose-600 p-4 rounded-lg bg-indigo-100 bg-opacity-15 backdrop-blur-xl">
          <div className="flex flex-row gap-4 items-center text-rose-500">
            <AlertTriangle className="size-10 md:size-20" />
            <p className="text-sm md:text-3xl md:font-semibold">
              {message ? `${message}` : "Something Went Wrong"}
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
