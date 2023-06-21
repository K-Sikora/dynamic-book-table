import Navigation from "@/components/Navigation/Navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DetailedBookLayout = (props: Props) => {
  return (
    <div className="mt-20">
      <Navigation infoTable={false} />
      <div className="h-[900px] bg-gradient-to-br bg-orange-800 from-orange-700 to-orange-800 max-w-6xl mx-auto my-8 rounded-lg p-8">
        {props.children}
      </div>
    </div>
  );
};

export default DetailedBookLayout;
