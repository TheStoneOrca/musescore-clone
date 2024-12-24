import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AvatarBTN() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>Null</AvatarFallback>
    </Avatar>
  );
}
