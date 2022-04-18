import { Rent, RentService } from "./Rent";
import { Book, BookService } from "./Book";
import { ILibraryFacade } from "./ILibraryFacade";
import { User, UserService } from "./User";

export class Facade implements ILibraryFacade {
  addBookToCatalog(title: string): void {
    BookService.getInstance().add(title)
  }
  editBookInCatalog(bookId: number, newTitle: string): void {
    BookService.getInstance().edit(bookId, newTitle)
  }
  showAllBooksInCatalog(): Book[] {
    return BookService.getInstance().findAll()
  }
  signupUser(fullName: string, address: string): void {
    UserService.getInstance().add(fullName, address)
  }
  showAllUsers(): User[] {
    return UserService.getInstance().findAll();
  }
  rent(userId: string, bookId: number, upto: string): void {
    RentService.getInstance().add(userId, bookId, upto)
  }
  showAllRentings(): Rent[] {
    return RentService.getInstance().findAll()
  }
}