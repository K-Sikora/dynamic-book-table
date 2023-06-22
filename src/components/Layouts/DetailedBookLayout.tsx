import Navigation from "@/components/Navigation/Navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DetailedBookLayout = (props: Props) => {
  return (
    <div className="mt-20">
      <Navigation infoTable={false} />
      <div className="px-5">
        <div className="bg-orange-600/80 backdrop-blur-md max-w-6xl mx-auto my-8 rounded-lg px-4 py-8 md:p-8">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default DetailedBookLayout;
