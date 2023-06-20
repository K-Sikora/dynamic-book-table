import { Book } from "@/types/Book";
import React from "react";

type Props = {
  book: Book;
};

const SingleBook = (props: Props) => {
  return (
    <div className="h-32 w-full text-white bg-orange-800 rounded-lg items-center shadow-lg shadow-orange-950/40 grid grid-cols-6 text-center place-content-between">
      <img
        src={props.book.simple_thumb}
        className="rounded-l-lg h-full col-span-1"
      ></img>
      <div className="col-span-1 flex flex-col px-2 font-semibold items-center">
        <h3>{props.book.author}</h3>
        <button className="mt-2 bg-orange-950 text-white px-4 py-1.5 rounded-lg text-sm font-normal">
          See author&apos;s books
        </button>
      </div>
      <h3 className="col-span-2 px-2">{props.book.title}</h3>
      <h3 className="col-span-1 px-2">{props.book.genre}</h3>
      <h3 className="col-span-1 px-2">{props.book.epoch}</h3>
    </div>
  );
};

export default SingleBook;
