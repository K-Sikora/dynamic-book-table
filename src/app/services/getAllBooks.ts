export default async function getAllBooks() {
  try {
    const res = await fetch("https://wolnelektury.pl/api/books/", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err);
  }
}
