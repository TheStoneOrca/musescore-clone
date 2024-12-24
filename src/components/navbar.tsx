"use client";

import { Button } from "./ui/button";
import SearchBar from "./searchbar";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import AvatarDropDown from "./avatardropdown";

export default function NavBar() {
  return (
    <div className="flex justify-between text-center items-center h-12 bg-black text-white">
      <h1 className="text-2xl ml-1">Orca's Music</h1>
      <div className="flex mx-auto justify-center items-center text-center">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <SearchBar />
        <Button variant="ghost" asChild>
          <Link href="/music">Scores</Link>
        </Button>
      </div>
      <div className="flex ml-auto">
        <AvatarDropDown />
      </div>
    </div>
  );
}
