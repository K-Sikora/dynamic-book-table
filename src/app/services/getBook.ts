export default async function getBook(bookSlug: string) {
  try {
    const res = await fetch(`https://wolnelektury.pl/api/books/${bookSlug}/`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
