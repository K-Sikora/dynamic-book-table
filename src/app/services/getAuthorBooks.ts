export default async function getAuthorBooks(
  authorSlug: string,
  pageNumber: number,
  itemsPerPage: number
) {
  try {
    const res = await fetch(
      `https://wolnelektury.pl/api/authors/${authorSlug}/books/`,
      {
        next: { revalidate: 3600 },
      }
    );
    const data = await res.json();

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return { paginatedData, totalPages };
  } catch (error) {
    console.log(error);
    throw new Error("Author not found");
  }
}
