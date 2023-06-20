import React from "react";
import Pagination from "@/components/Pagination/Pagination";
type Props = {
  currentPage: string;
  children: React.ReactNode;
};

const TableLayout = (props: Props) => {
  return (
    <>
      <div className="sticky z-10 py-4 flex flex-col gap-8 top-0 bg-orange-900/50 backdrop-blur-md">
        <div className="w-full max-w-6xl text-white mx-auto flex items-center justify-between">
          <span>breadcrumb</span>
          <Pagination currentPage={props.currentPage} />
        </div>

        <div className="text-white px-4">
          <div className="max-w-6xl mx-auto font-medium text-lg text-center grid grid-cols-6 place-content-between h-full">
            <span className="px-2"></span>
            <span className="px-2">Author</span>
            <span className="col-span-2 px-2">Title</span>
            <span className="px-2">Genre</span>
            <span className="px-2">Epoch</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">{props.children}</div>
    </>
  );
};

export default TableLayout;
