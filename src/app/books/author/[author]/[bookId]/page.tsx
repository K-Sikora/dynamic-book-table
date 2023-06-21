import DetailedBookLayout from "@/app/Layouts/DetailedBookLayout";
import Link from "next/link";
import getBook from "@/app/services/getBook";
import { DetailedBook } from "@/types/DetailedBook";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import React from "react";
import AuthorBooks from "@/components/AuthorBooks/AuthorBooks";

type Props = {
  params: {
    bookId: string;
  };
};

const page = async (props: Props) => {
  const book: DetailedBook = await getBook(props.params.bookId);
  return (
    <DetailedBookLayout>
      <div className="grid grid-cols-3 h-[400px] text-white">
        <div className="col-span-1">
          <img
            src={book.simple_cover}
            className="h-[400px] rounded-lg shadow-xl"
          ></img>
        </div>
        <div className="col-span-2 flex flex-col gap-8">
          <h2 className="text-2xl font-medium">{book.title}</h2>
          <Link href={book.authors[0].slug}>
            Author: {book.authors[0].name}
          </Link>
          <div className="flex gap-4 flex-wrap w-96">
            {book.epochs
              .concat(book.genres)
              .concat(book.kinds)
              .map((item) => (
                <span
                  key={item.slug}
                  className="py-1 text-sm border-2 border-gray-100/70 pointer-events-none shadow-lg shadow-black/10 text-white rounded-lg px-4"
                >
                  {item.name !== "nie dotyczy" ? item.name : "Inne"}
                </span>
              ))}
          </div>
          <div className="h-full flex items-end">
            {book.pdf && (
              <Link
                href={book.pdf}
                target="_blank"
                className="bg-orange-900 border-2 border-transparent hover:border-gray-100/70 duration-150 flex items-center gap-1 justify-center text-white px-8 py-2 rounded-lg text-sm font-normal"
              >
                <span>Open PDF</span>
                <BsFillFileEarmarkPdfFill
                  className="duration-150"
                  size={18}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
      <AuthorBooks
        authorSlug={book.authors[0].slug}
        authorName={book.authors[0].name}
      />
    </DetailedBookLayout>
  );
};

export default page;
