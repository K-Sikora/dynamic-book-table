export default async function getBook(bookSlug: string) {
  const res = await fetch(`https://wolnelektury.pl/api/books/${bookSlug}/`);
  const data = await res.json();
  return data;
}
