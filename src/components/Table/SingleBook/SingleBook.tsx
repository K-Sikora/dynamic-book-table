import { Book } from "@/types/Book";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
type Props = {
  book: Book;
  authorButton: boolean;
};

const SingleBook = (props: Props) => {
  return (
    <div className="h-32 w-full text-white bg-gradient-to-r bg-orange-800 from-orange-700 to-orange-800 rounded-lg items-center shadow-lg shadow-orange-950/40 grid grid-cols-6 text-center place-content-between">
      <img
        src={props.book.simple_thumb}
        className="rounded-l-lg h-32 col-span-1"
      ></img>
      <div className="col-span-1 flex flex-col px-2 font-semibold items-center">
        <h3>{props.book.author}</h3>
        {props.authorButton && (
          <Link
            href={
              "author/" +
              slugify(props.book.author, { lower: true, strict: true })
            }
          >
            <button className="mt-2 bg-orange-950 text-white px-4 py-1.5 rounded-lg text-sm font-normal">
              See author&apos;s books
            </button>
          </Link>
        )}
      </div>
      <div className="col-span-2 flex flex-col px-2 font-semibold items-center">
        <h3>{props.book.title}</h3>

        <Link
          href={
            "/books/author/" +
            slugify(props.book.author, { lower: true, strict: true }) +
            `/${props.book.slug}`
          }
        >
          <button className="mt-2 bg-orange-950 text-white px-4 py-1.5 rounded-lg text-sm font-normal">
            See details
          </button>
        </Link>
      </div>
      <h3 className="col-span-1 px-2">{props.book.genre}</h3>
      <h3 className="col-span-1 px-2">{props.book.epoch}</h3>
    </div>
  );
};

export default SingleBook;
