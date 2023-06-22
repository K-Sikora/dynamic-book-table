"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
type Props = {
  error: Error;
};

const Error = (props: Props) => {
  const handleGoBack = () => {
    router.back();
  };

  const router = useRouter();
  return (
    <div className="h-screen relative text-white text-center flex items-center justify-center w-full">
      <div className="flex flex-col items-center z-10 gap-4">
        <h3 className="text-xl md:text-3xl px-4">{props.error.message}</h3>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <button
            onClick={handleGoBack}
            className="px-4 py-1.5 bg-orange-800 text-sm z-10 rounded-lg text-white"
          >
            Go back
          </button>
          <Link
            className="px-4 py-1.5 bg-orange-800 text-sm z-10 rounded-lg text-white"
            href="/"
          >
            Homepage
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 -z-0 bg-black/80 h-full w-full"></div>
    </div>
  );
};

export default Error;
