"use client";

import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <form className="flex">
      <Input
        type="text"
        className="rounded-l-full border w-80 border-gray-400 text-black"
        placeholder="Search"
        name="query"
      />
      <Button className="rounded-r-full border-gray-400" type="submit">
        <Search />
      </Button>
    </form>
  );
}
