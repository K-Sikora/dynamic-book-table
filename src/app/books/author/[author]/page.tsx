import React from "react";
import { Book } from "@/types/Book";
import getAuthorBooks from "@/app/services/getAuthorBooks";
import Table from "@/components/Table/Table";
import { PaginatedBooks } from "@/types/PaginatedBooks";
import getAuthors from "@/app/services/getAuthors";
import { Author } from "@/types/Author";
type Props = {
  params: {
    author: string;
  };
};

export async function generateMetadata(props: Props) {
  return {
    title: `${props.params.author
      .replace(/-/g, " ")
      .replace(/(?:^|\s)\S/g, (char) => char.toUpperCase())} - All books`,
  };
}

export async function generateStaticParams() {
  const allAuthors: Author[] = await getAuthors();

  return allAuthors.map((author) => ({ author: author.slug }));
}

const page = async (props: Props) => {
  const booksByAuthor: PaginatedBooks | undefined = await getAuthorBooks(
    props.params.author,
    1,
    3000
  );
  return (
    <div>
      {booksByAuthor && (
        <Table
          paginatedBooks={booksByAuthor}
          currentId={"1"}
          authorButton={false}
          pagination={false}
        />
      )}
    </div>
  );
};

export default page;
