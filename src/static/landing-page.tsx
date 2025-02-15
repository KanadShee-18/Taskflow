"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Button size={"lg"} onClick={() => router.push("/sign-in")}>
        Sign In
      </Button>
    </div>
  );
};

export default Landing;
