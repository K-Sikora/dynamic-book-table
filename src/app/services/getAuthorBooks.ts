export default async function getAuthorBooks(authorSlug: string) {
  try {
    const res = await fetch(
      `https://wolnelektury.pl/api/authors/${authorSlug}/books/`,
      {
        next: { revalidate: 3600 },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
