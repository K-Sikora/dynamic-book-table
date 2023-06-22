"use client";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { useRouter } from "next/navigation";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
type Props = {
  infoTable: boolean;
};

const Navigation = (props: Props) => {
  const router = useRouter();
  return (
    <div className="sticky z-10 py-2 top-0 bg-orange-950/20 backdrop-blur-lg">
      <div className="text-white px-5 flex flex-col h-full gap-6 w-full">
        <Breadcrumbs />
        <div className="max-w-6xl w-full hidden md:grid mx-auto font-medium text-base text-center grid-cols-9 place-content-between items-center h-full">
          <button
            onClick={() => {
              router.back();
            }}
            className="py-1.5 w-6"
          >
            <HiArrowLeft size={20} />
          </button>
          {props.infoTable && (
            <>
              <span className="col-span-2 px-2">Author</span>
              <span className="col-span-2 px-2">Title</span>
              <span className="col-span-2 px-2">Genre</span>
              <span className="col-span-2 px-2">Epoch</span>
            </>
          )}
        </div>
        <div className="md:hidden w-full max-w-6xl mx-auto">
          <button
            onClick={() => {
              router.back();
            }}
            className="py-1.5 w-6"
          >
            <HiArrowLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
