import { Book, PaginatedBooks } from "@/types/Book";
import React from "react";
import SingleBook from "./SingleBook/SingleBook";
import TableLayout from "@/app/Layouts/TableLayout";
type Props = {
  paginatedBooks: PaginatedBooks;
  currentId: string;
};

const Table = (props: Props) => {
  console.log(props.paginatedBooks.totalPages);
  return (
    <TableLayout currentPage={props.currentId}>
      <div className="flex flex-col gap-8 py-8">
        {props.paginatedBooks.paginatedData.map((book) => (
          <SingleBook
            key={book.slug}
            book={book}
          />
        ))}
      </div>
    </TableLayout>
  );
};

export default Table;
