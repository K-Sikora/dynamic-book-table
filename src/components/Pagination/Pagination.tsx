"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
type Props = {
  currentPage: string;
};

const Pagination = (props: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      router.push(`${value}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const router = useRouter();
  const [value, setValue] = useState(props.currentPage);
  return (
    <div className="flex text-lg border-2 border-gray-300/80 rounded-md">
      {props.currentPage !== "1" && (
        <Link
          className="w-10 flex items-center justify-center duration-150 py-1 hover:text-orange-400"
          href={`${parseInt(props.currentPage) - 1}`}
        >
          <FaChevronLeft size={14} />
        </Link>
      )}
      <input
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-12 bg-transparent text-center py-1 outline-none border-gray-300/80"
      ></input>
      <Link
        className="w-10 flex items-center duration-150 justify-center py-1 hover:text-orange-400"
        href={`${parseInt(props.currentPage) + 1}`}
      >
        <FaChevronRight size={14} />
      </Link>
    </div>
  );
};

export default Pagination;
