import DetailedBookLayout from "@/components/Layouts/DetailedBookLayout";
import Link from "next/link";
import { Author } from "@/types/Author";
import { Book } from "@/types/Book";
import getAuthors from "@/app/services/getAuthors";
import getAuthorBooks from "@/app/services/getAuthorBooks";
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

export async function generateMetadata(props: Props) {
  const book: DetailedBook = await getBook(props.params.bookId);
  if (book.authors) {
    return {
      title: `${book.authors[0].name} - ${book.title}`,
    };
  }
}

export async function generateStaticParams() {
  const authors: Author[] = await getAuthors();

  const authorBooksPromises = authors.map(async (author) => {
    const authorSlug = author.slug;
    const books: Book[] = await getAuthorBooks(authorSlug);

    return books.map((bookId) => ({
      author: authorSlug,
      bookId: bookId.slug,
    }));
  });

  const authorBooks = await Promise.all(authorBooksPromises);

  return authorBooks.flat();
}

const page = async (props: Props) => {
  const book: DetailedBook = await getBook(props.params.bookId);

  if (book.detail) {
    throw new Error("Book not found.");
  }

  return (
    <DetailedBookLayout>
      <div className="flex flex-col items-center md:items-stretch md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:h-[400px] text-white">
        <div className="col-span-1 flex justify-center md:block">
          <img
            alt="book cover"
            src={book.simple_cover}
            className="w-48 md:w-auto md:h-[400px] rounded-lg shadow-lg"
          ></img>
        </div>
        <div className="lg:col-span-2 items-center md:items-start text-center md:text-left flex flex-col gap-4 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-bold sm:px-12 md:px-0">
            {book.title}
          </h2>
          <Link href={"/books/author/" + book.authors[0].slug}>
            Author: {book.authors[0].name}
          </Link>
          <div className="flex gap-4 flex-wrap md:w-80 justify-center md:justify-start">
            {book.epochs
              .concat(book.genres)
              .concat(book.kinds)
              .map((item) => (
                <span
                  key={item.slug}
                  className="py-1 capitalize text-sm border-2 border-gray-100/70 pointer-events-none shadow-lg shadow-black/10 text-white rounded-lg px-4"
                >
                  {item.name !== "nie dotyczy" ? item.name : "Inne"}
                </span>
              ))}
          </div>
          <div className="h-full flex md:items-end justify-center md:justify-normal">
            {book.pdf && (
              <Link
                href={book.pdf}
                target="_blank"
                className="bg-orange-500 border-2 border-transparent hover:border-gray-100/70 duration-150 flex items-center gap-1 justify-center text-white px-8 py-2 rounded-lg text-sm font-normal"
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
