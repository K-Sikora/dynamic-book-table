import Link from "next/link";
import React from "react";

const page = async () => {
  return (
    <main className="relative h-screen flex items-center justify-center z-0 flex-col gap-4">
      <h2 className="text-white text-lg sm:text-2xl font-bold">
        Dynamic book table
      </h2>
      <Link href="/books/1">
        <button className="w-52 sm:w-60 h-12 bg-orange-700 text-white font-semibold text-sm sm:text-base shadow-lg border-2 border-transparent hover:border-orange-50 duration-300 rounded-md">
          Start exploring books
        </button>
      </Link>
      <div className="absolute top-0 left-0 h-full w-full -z-10 bg-black/40"></div>
    </main>
  );
};

export default page;
