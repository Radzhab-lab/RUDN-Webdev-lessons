import { BookType } from "./types/BookType";
import { BookInLibrary } from "./types/BookInLibrary";

const firstBookData: BookType = {
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967
};

const secondBookData: BookType = {
  title: "1984",
  author: "Джордж Оруэлл",
  year: 1949
};

const libraryItem1 = new BookInLibrary(firstBookData);
const libraryItem2 = new BookInLibrary(secondBookData);

libraryItem1.borrow("Петр");
libraryItem2.borrow("Анна");
