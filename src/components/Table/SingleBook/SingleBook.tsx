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
    <div className="h-auto py-6 md:py-0 md:h-32 w-full text-white bg-gradient-to-r text-base md:text-sm lg:text-base bg-orange-800 from-orange-700 to-orange-800 rounded-lg items-center shadow-lg shadow-orange-950/40 flex flex-col gap-2 md:gap-0 md:grid md:grid-cols-9 text-center place-content-between">
      <img
        alt="book cover"
        className="rounded-l-lg h-32 col-span-1"
        src={props.book.simple_thumb}
      ></img>
      <div className="col-span-2 flex flex-col px-2 font-semibold items-center">
        <h3 className="text-lg md:text-sm font-bold">{props.book.author}</h3>
        {props.authorButton && (
          <Link
            href={
              "author/" +
              slugify(props.book.author, { lower: true, strict: true })
            }
          >
            <button className="mt-2 bg-orange-950 border-2 border-transparent hover:border-gray-100/70 duration-150 text-white px-4 py-1.5 rounded-lg text-sm font-normal">
              Author&apos;s books
            </button>
          </Link>
        )}
      </div>
      <div className="col-span-2 flex flex-col px-2 font-semibold items-center">
        <h3 className="text-base md:text-sm px-2 md:px-0">
          {props.book.title}
        </h3>
        <Link
          href={
            "/books/author/" +
            slugify(props.book.author, { lower: true, strict: true }) +
            `/${props.book.slug}`
          }
        >
          <button className="mt-2 bg-orange-950 border-2 border-transparent hover:border-gray-100/70 duration-150 text-white px-4 py-1.5 rounded-lg text-sm font-normal">
            See details
          </button>
        </Link>
      </div>
      <h3 className="col-span-2 px-2 capitalize font-medium">
        {props.book.genre}
      </h3>
      <h3 className="col-span-2 px-2 capitalize font-medium">
        {props.book.epoch}
      </h3>
    </div>
  );
};

export default SingleBook;
