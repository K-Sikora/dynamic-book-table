import React from "react";
import { PaginatedBooks } from "@/types/PaginatedBooks";
import getPaginatedBooks from "@/app/services/getPaginatedBooks";
import Table from "@/components/Table/Table";
import PageNotFound from "@/components/NotFound/NotFound";
type Props = {
  params: {
    pageId: string;
  };
};
export async function generateStaticParams() {
  const pages = await getPaginatedBooks(1, 25);
  const length = pages?.totalPages || 0;

  const arr = Array.from({ length });
  return arr.map((_, index) => ({ pageId: (index + 1).toString() }));
}

export async function generateMetadata(props: Props) {
  return {
    title: `All books - Page ${props.params.pageId}`,
  };
}

const page = async (props: Props) => {
  const paginatedBooks: PaginatedBooks | undefined = await getPaginatedBooks(
    parseInt(props.params.pageId),
    25
  );
  if (paginatedBooks && !(paginatedBooks.paginatedData.length > 0)) {
    return <PageNotFound />;
  }
  return (
    <>
      {paginatedBooks && (
        <Table
          currentId={props.params.pageId}
          paginatedBooks={paginatedBooks}
          authorButton={true}
          pagination={true}
        />
      )}
    </>
  );
};

export default page;
