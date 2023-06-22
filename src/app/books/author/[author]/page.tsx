import React from "react";
import getAuthorBooks from "@/app/services/getPaginatedAuthorBooks";
import Table from "@/components/Table/Table";
import { PaginatedBooks } from "@/types/PaginatedBooks";
import PageNotFound from "@/components/NotFound/NotFound";
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

const page = async (props: Props) => {
  const booksByAuthor: PaginatedBooks | undefined = await getAuthorBooks(
    props.params.author,
    1,
    3000
  );
  if (!booksByAuthor) {
    return <PageNotFound />;
  }
  return (
    <>
      {booksByAuthor && (
        <Table
          paginatedBooks={booksByAuthor}
          currentId={"1"}
          authorButton={false}
          pagination={false}
        />
      )}
    </>
  );
};

export default page;
