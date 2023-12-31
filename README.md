# Dynamic Book Table with React

![dynamic-book-table](https://github.com/K-Sikora/dynamic-book-table/assets/105585380/7ae7424a-5e71-4d3c-be31-e413acf314c4)


Dynamic Book Table is a web application that generates data in a table and displays information such as author, title, genre, and epoch. The project utilizes Static Site Generation (SSG) from Next.js to generate static routes at build time, taking advantage of the fact that the data displayed in the table is static and doesn't change frequently. This approach ensures fast and efficient performance by pre-rendering the pages during the build process.

The book data is fetched from the [wolnelektury API](https://wolnelektury.pl/api/), which provides a rich collection of literary works.

## Live demo

You can check live demo of this website on [Vercel](https://dynamic-book-table.vercel.app/).

## Features

- Generates a dynamic table with book data
- Displays information about each book, including author, title, genre, and epoch
- Allows displaying detailed information for individual books
- Provides the ability to view all books by a specific author in a table format
- Utilizes Incremental Static Regeneration (ISR) and Static Site Generation (SSG) for optimal performance
- Implements breadcrumbs and pagination functionalities for easy navigation through pages

## Technologies Used

- React
- Next.js 13.4
- Tailwind CSS
- TypeScript

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (Because of SSG, overall build time might take longer and dev server might be slower)

Or you can create a build to generate static routes:

```bash
npm run build
# or
yarn build
```

And then:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
