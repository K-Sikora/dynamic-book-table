import { Book } from "@/types/Book";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  book: Book;
  authorButton: boolean;
};

const SingleBook = (props: Props) => {
  return (
    <div className="h-auto py-8 md:py-0 md:h-32 w-full text-white bg-orange-600/80 backdrop-blur-md text-base md:text-sm lg:text-base rounded-lg items-center shadow-lg shadow-orange-950/40 flex flex-col gap-3 md:gap-0 md:grid md:grid-cols-9 text-center place-content-between">
      <img
        alt="book cover"
        className="rounded-l-lg h-40 md:h-32 col-span-1"
        src={props.book.simple_thumb}
      ></img>
      <div className="col-span-2 flex flex-col px-2 font-semibold items-center">
        <h3 className="text-lg md:text-sm font-bold">{props.book.author}</h3>
        {props.authorButton && (
          <Link
            className="mt-2 bg-orange-500 shadow-lg shadow-black/10 border-2 border-transparent hover:border-gray-100/90 duration-150 text-white px-4 py-1 rounded-lg text-sm font-normal flex items-center jsutify-center gap-1"
            href={
              "author/" +
              slugify(props.book.author, { lower: true, strict: true })
            }
          >
            Author&apos;s books
            <HiArrowRight size={12} />
          </Link>
        )}
      </div>
      <div className="col-span-2 flex flex-col px-2 font-semibold items-center">
        <h3 className="text-base md:text-sm px-2 md:px-0">
          {props.book.title}
        </h3>
        <Link
          className="mt-2 bg-orange-500 shadow-lg shadow-black/10 border-2 border-transparent hover:border-gray-100/90 duration-150 text-white px-4 py-1 rounded-lg text-sm font-normal flex items-center justify-center gap-1"
          href={
            "/books/author/" +
            slugify(props.book.author, { lower: true, strict: true }) +
            `/${props.book.slug}`
          }
        >
          Details
          <HiArrowRight size={12} />
        </Link>
      </div>
      <h3 className="col-span-2 px-2 capitalize text-sm md:text-base font-medium">
        <span className="md:hidden">Genre: </span>
        {props.book.genre}
      </h3>
      <h3 className="col-span-2 px-2 capitalize text-sm md:text-base font-medium">
        <span className="md:hidden">Epoch: </span>
        {props.book.epoch}
      </h3>
    </div>
  );
};

export default SingleBook;
