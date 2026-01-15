import { BookType } from "./BookType";
import { BorrowInterface } from "./BorrowInterface";

export class BookInLibrary implements BorrowInterface {
  info: BookType;

  constructor(bookData: BookType) {
    this.info = bookData;
  }

  borrow(userName: string): void {
    const resultMessage = "Книга \"" + this.info.title + "\" выдана пользователю " + userName;
    console.log(resultMessage);
  }
}
