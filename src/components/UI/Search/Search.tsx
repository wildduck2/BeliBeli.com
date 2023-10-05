import React, { useState } from "react";
import Input from "../Input";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

const Search = () => {
  const [value, setValue] = useState<string>("");

  return (
    <form
      action="search"
      className="
        relative
        flex
        items-center
        justify-center
        gap-2
        border-b
      border-blackOne
        pb-2
      "
    >
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        placeholder={`What you're Looking for?`}
      />

      <AiOutlineClose
        size={20}
        className={twMerge(`
          absolute 
          right-0
          bg-white
          fill-blackOne
          stroke-1
          opacity-0
          ${value && "opacity-1"}
        `)}
      />

      <CiSearch
        size={20}
        className="
        fill-blackOne 
          stroke-1
        "
      />
    </form>
  );
};

export default Search;
