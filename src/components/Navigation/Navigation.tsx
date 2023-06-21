import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
type Props = {
  infoTable: boolean;
};

const Navigation = (props: Props) => {
  return (
    <div className="sticky z-10 pt-12 pb-4 flex flex-col gap-8 top-0 bg-orange-900/50 backdrop-blur-md">
      <div className="text-white px-4">
        <div className="max-w-6xl mx-auto font-medium text-lg text-center grid grid-cols-6 place-content-between items-center h-full">
          <Breadcrumbs />
          {props.infoTable && (
            <>
              <span></span>
              <span className="px-2">Author</span>
              <span className="col-span-2 px-2">Title</span>
              <span className="px-2">Genre</span>
              <span className="px-2">Epoch</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
