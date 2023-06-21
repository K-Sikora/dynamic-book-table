import Link from "next/link";
import React from "react";
type Props = {};

const page = async (props: Props) => {
  return (
    <div className="relative h-screen flex items-center justify-center z-0 flex-col gap-4">
      <h2 className="text-white text-2xl">Dynamic book table</h2>
      <Link href="/books/1">
        <button className="w-60 h-12 bg-orange-700 text-white font-semibold text-sm border-2 border-transparent hover:border-orange-50 duration-300 rounded-md">
          Start exploring books
        </button>
      </Link>
      <div className="absolute top-0 left-0 h-full w-full -z-10 bg-black/40"></div>
    </div>
  );
};

export default page;
