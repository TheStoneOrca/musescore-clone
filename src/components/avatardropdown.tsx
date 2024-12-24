import { DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import AvatarBTN from "./avatar";
import Link from "next/link";
import useUser from "@/hooks/useuser";
import { Loader2Icon } from "lucide-react";

export default function AvatarDropDown() {
  const { isReady, isError, isSignedIn } = useUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AvatarBTN />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {isReady ? (
          <>
            {isSignedIn ? (
              <>
                {" "}
                <DropdownMenuLabel>Hello User</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">Music Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={`/profile/userid`}>My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/scores/userid">My Compositions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/purchases">My Purchases</Link>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem asChild>
                  <Link href="/signup">Sign Up </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/signin">Sign In</Link>
                </DropdownMenuItem>
              </>
            )}
          </>
        ) : (
          <Loader2Icon />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
