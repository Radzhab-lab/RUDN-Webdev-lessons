import { BookType } from "./types/BookType";
import { BookInLibrary } from "./types/BookInLibrary";
import { Repository } from "./types/Repository";

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

const bookRepository = new Repository<BookType>([firstBookData, secondBookData]);

const thirdBookData: BookType = {
  title: "Гарри Поттер",
  author: "Джоан Роулинг",
  year: 1997
};

bookRepository.add(thirdBookData);

const allBooks = bookRepository.getAll();
console.log("Все книги в репозитории:", allBooks);

function updateBook(book: BookType, updates: Partial<BookType>): BookType {
  const updatedBook: BookType = {
    title: updates.title !== undefined ? updates.title : book.title,
    author: updates.author !== undefined ? updates.author : book.author,
    year: updates.year !== undefined ? updates.year : book.year
  };
  return updatedBook;
}

const originalBook: BookType = {
  title: "Война и мир",
  author: "Лев Толстой",
  year: 1869
};

const updatedBook = updateBook(originalBook, { year: 1870 });
console.log("Обновленная книга:", updatedBook);

function getReadonlyBooks(repo: Repository<BookType>): Readonly<BookType[]> {
  const books = repo.getAll();
  const booksCopy = [...books];
  return booksCopy as Readonly<BookType[]>;
}

const readonlyBooksList = getReadonlyBooks(bookRepository);
console.log("Список книг только для чтения:", readonlyBooksList);


