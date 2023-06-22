export default async function getPaginatedBooks(
  pageNumber: number,
  itemsPerPage: number
) {
  if (isNaN(pageNumber)) {
    throw new Error("A valid book page must be provided.");
  }

  try {
    const res = await fetch("https://wolnelektury.pl/api/books/", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    return { paginatedData, totalPages };
  } catch (error) {
    console.log(error);
  }
}
