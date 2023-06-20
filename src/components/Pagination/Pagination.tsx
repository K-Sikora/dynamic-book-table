import React from "react";
import Link from "next/link";
type Props = {
  currentPage: string;
};

const Pagination = (props: Props) => {
  return (
    <div className="flex gap-4">
      <Link href={`/page/${parseInt(props.currentPage) - 1}`}>
        {parseInt(props.currentPage) - 1}
      </Link>
      {props.currentPage}
      <Link href={`/page/${parseInt(props.currentPage) + 1}`}>
        {parseInt(props.currentPage) + 1}
      </Link>
    </div>
  );
};

export default Pagination;
