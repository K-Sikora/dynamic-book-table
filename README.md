# Dynamic Book Table

Dynamic Book Table is a web application that generates data in a table and displays information such as author, title, genre, and epoch. The project utilizes Static Site Generation (SSG) from Next.js to generate static routes at build time instead of on-demand at request time to ensure fast and efficient performance.

The book data is fetched from the [wolnelektury API](https://wolnelektury.pl/api/), which provides a rich collection of literary works.

## Live demo

You can check live demo of this website on [Vercel](https://dynamic-book-table.vercel.app/).

## Features

- Generates a dynamic table with book data
- Displays information about each book, including author, title, genre, and epoch
- Allows displaying detailed information for individual books
- Provides the ability to view all books by a specific author in a table format
- Utilizes Incremental Static Regeneration (ISR) for optimal performance
- Implements breadcrumbs and pagination functionalities for easy navigation through pages

## Technologies Used

- React
- Next.js 13.4
- Tailwind CSS

## Installation

1. Clone the repository: `git clone https://github.com/K-Sikora/dynamic-book-table`
2. Install dependencies: `npm install`

## Usage

You can run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (Because of generateStaticParams, overall build time might take longer and dev server might be slower)

Or you can create a build to generate static routes:

```bash
npm run build
# or
yarn build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
