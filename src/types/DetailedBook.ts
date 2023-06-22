export type DetailedBook = {
  title: string;
  url: string;
  language: string;
  epochs: [
    {
      name: string;
      slug: string;
    }
  ];
  genres: [
    {
      name: string;
      slug: string;
    }
  ];
  kinds: [
    {
      name: string;
      slug: string;
    }
  ];
  authors: [
    {
      name: string;
      slug: string;
    }
  ];
  pdf?: string;
  cover_color: string;
  simple_cover: string;
  cover_thumb: string;
  cover: string;
  simple_thumb: string;
  detail?: string;
};
