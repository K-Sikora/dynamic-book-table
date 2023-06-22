import React from "react";
import Pagination from "@/components/Pagination/Pagination";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Navigation from "@/components/Navigation/Navigation";
type Props = {
  currentPage: string;
  children: React.ReactNode;
  pagination: boolean;
};

const TableLayout = (props: Props) => {
  return (
    <div className="pb-8 mt-20">
      <Navigation infoTable={true} />
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">{props.children}</div>
      </div>
      {props.pagination && (
        <div className="max-w-6xl text-white mx-auto flex items-center justify-center">
          <Pagination currentPage={props.currentPage} />
        </div>
      )}
    </div>
  );
};

export default TableLayout;
