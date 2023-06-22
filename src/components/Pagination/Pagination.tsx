"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
type Props = {
  currentPage: string;
};

const Pagination = (props: Props) => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`${value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^[0-9\s]*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };
  const [value, setValue] = useState(props.currentPage);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex text-lg border-2 border-gray-300/80 rounded-md"
    >
      {props.currentPage !== "1" && (
        <Link
          className="w-10 flex items-center justify-center border-r-2 border-gray-300/80 duration-150 py-1 hover:text-orange-400"
          href={`${parseInt(props.currentPage) - 1}`}
        >
          <FaChevronLeft size={14} />
        </Link>
      )}
      <input
        value={value}
        onChange={handleChange}
        className="w-12 bg-transparent text-center py-1 outline-none border-gray-300/80"
      ></input>
      <Link
        className="w-10 flex items-center duration-150 border-l-2 border-gray-300/80 justify-center py-1 hover:text-orange-400"
        href={`${parseInt(props.currentPage) + 1}`}
      >
        <FaChevronRight size={14} />
      </Link>
    </form>
  );
};

export default Pagination;
