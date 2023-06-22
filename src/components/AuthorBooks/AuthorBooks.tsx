import getAuthorBooks from "@/app/services/getPaginatedAuthorBooks";
import { PaginatedBooks } from "@/types/PaginatedBooks";
import Link from "next/link";
import React from "react";

type Props = {
  authorSlug: string;
  authorName: string;
};

const AuthorBooks = async (props: Props) => {
  const authorBooks: PaginatedBooks | undefined = await getAuthorBooks(
    props.authorSlug,
    1,
    5
  );
  return (
    <div className="col-span-3 mt-12 text-white flex flex-col items-center justify-end">
      <h3 className="text-lg md:text-2xl font-semibold">
        More from {props.authorName}
      </h3>
      <div className="w-full flex flex-col gap-4 md:gap-2 md:flex-row md:justify-between items-center md:items-start text-center">
        {authorBooks?.paginatedData.reverse().map((book) => (
          <div
            key={book.slug}
            className="flex items-center mt-8 md:w-36 flex-col"
          >
            <Link href={book.slug}>
              <img
                alt="book cover"
                src={book.simple_thumb}
                className="w-36 shadow-lg rounded-lg"
              ></img>
            </Link>
            <Link href={book.slug}>
              <h4 className="font-medium mt-2 px-4 md:px-2">{book.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorBooks;
