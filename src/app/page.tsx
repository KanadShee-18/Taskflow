"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { useLogout } from "@/features/auth/api/use-logout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data, isLoading } = useCurrentUser();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  console.log("Data i am getting now: ", data);

  return (
    <div className="flex gap-2">
      Only visible to authorized user.
      <Button onClick={() => mutate()}>Logout</Button>
    </div>
  );
}
