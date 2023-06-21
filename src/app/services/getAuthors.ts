export default async function () {
  try {
    const res = await fetch("https://wolnelektury.pl/api/authors/", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
