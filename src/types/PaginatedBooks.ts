import { Book } from "./Book";
export type PaginatedBooks = {
  paginatedData: Book[];
  totalPages: number;
};
