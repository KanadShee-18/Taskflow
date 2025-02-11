import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-2">
      <Button variant={"primary"} size={"default"}>
        Primary
      </Button>
      <Button variant={"secondary"} size={"lg"}>
        Secondary
      </Button>
      <Button variant={"destructive"} size={"icon"}>
        Destructive
      </Button>
      <Button variant={"ghost"} size={"xs"}>
        Ghost
      </Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"teritrary"}>Teritrary</Button>

      <hr />
      <Input placeholder="input something" className="my-4" />
    </div>
  );
}
