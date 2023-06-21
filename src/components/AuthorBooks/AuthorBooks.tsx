import getAuthorBooks from "@/app/services/getAuthorBooks";
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
    4
  );
  return (
    <div className="h-1/2 col-span-3 text-white flex flex-col items-center gap-4 justify-end">
      <h3 className="text-2xl font-semibold">More from {props.authorName}</h3>
      <div className="w-full grid grid-cols-4 place-items-center">
        {authorBooks?.paginatedData.map((book) => (
          <Link
            key={book.slug}
            href={book.slug}
            className="flex items-center flex-col"
          >
            <img
              src={book.simple_thumb}
              className="w-36 shadow-lg"
            ></img>
            <h4 className="font-medium mt-2">{book.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorBooks;
