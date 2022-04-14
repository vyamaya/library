import { Rent, RentService } from "./Rent";
import { Book, BookService } from "./Book";
import { ILibraryFacade } from "./ILibraryFacade";
import { User, UserService } from "./User";

export class Facade implements ILibraryFacade {
  bookService = new BookService()
  userService = new UserService()
  rentService = new RentService()

  addBookToCatalog(title: string): void {
    this.bookService.add(title)
  }
  editBookInCatalog(bookId: number, newTitle: string): void {
    this.bookService.edit(bookId, newTitle)
  }
  showAllBooksInCatalog(): Book[] {
    return this.bookService.findAll()
  }
  signupUser(fullName: string, address: string): void {
    this.userService.add(fullName, address)
  }
  showAllUsers(): User[] {
    return this.userService.findAll();
  }
  rent(userId: string, bookId: number, upto: string): void {
    this.rentService.add(userId, bookId, upto)
  }
  showAllRentings(): Rent[] {
    return this.rentService.findAll()
  }
}