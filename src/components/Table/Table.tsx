import { PaginatedBooks } from "@/types/PaginatedBooks";
import React from "react";
import SingleBook from "./SingleBook/SingleBook";
import TableLayout from "@/components/Layouts/TableLayout";
type Props = {
  paginatedBooks: PaginatedBooks;
  currentId: string;
  authorButton: boolean;
  pagination: boolean;
};

const Table = (props: Props) => {
  return (
    <TableLayout
      pagination={props.pagination}
      currentPage={props.currentId}
    >
      <div className="flex flex-col gap-8 py-8">
        {props.paginatedBooks.paginatedData.map((book) => (
          <SingleBook
            key={book.slug}
            book={book}
            authorButton={props.authorButton}
          />
        ))}
      </div>
    </TableLayout>
  );
};

export default Table;
