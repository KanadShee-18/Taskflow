import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface MemberAvatarProps {
  name: string;
  className?: string;
  fallbackClassname?: string;
}

export const MemberAvatar = ({
  name,
  className,
  fallbackClassname,
}: MemberAvatarProps) => {
  return (
    <Avatar
      className={cn(
        "size-5 transition border border-slate-300 rounded-full",
        className
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-slate-100 font-medium text-slate-500 flex items-center justify-center",
          fallbackClassname
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
