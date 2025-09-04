import { Button } from "@/components/ui/button";
import { getCurrent } from "@/features/auth/queries";
import { getWorkspaces } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

const Landing = async () => {
  const user = await getCurrent();

  const workspaces = await getWorkspaces();

  const handleButtonClick = () => {
    if (!user) {
      redirect("/sign-in");
    } else if (workspaces.total === 0) {
      redirect(`/workspaces/create`);
    } else {
      redirect(`/dashboard/workspaces/${workspaces.documents[0].$id}`);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Button size={"lg"} onClick={handleButtonClick}>
        Sign In
      </Button>
    </div>
  );
};

export default Landing;
