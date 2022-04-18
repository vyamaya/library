import { Rent, RentService } from "./Rent";
import { Book, BookService } from "./Book";
import { ILibraryFacade } from "./ILibraryFacade/ILibraryFacade";
import { User, UserService } from "./User";
import { TAddBookParams } from "Book/BookType";
import { TAddUserParams } from "User/UserType";
import { TAddRentParams } from "Rent/RentType";

export class Facade implements ILibraryFacade {
  addBookToCatalog(bookParams: TAddBookParams): void {
    BookService.getInstance().add(bookParams)
  }
  editBookInCatalog(bookId: number, newTitle: string): void {
    BookService.getInstance().edit(bookId, newTitle)
  }
  showAllBooksInCatalog(): Book[] {
    return BookService.getInstance().findAll()
  }
  signupUser(userParams: TAddUserParams): void {
    UserService.getInstance().add(userParams)
  }
  showAllUsers(): User[] {
    return UserService.getInstance().findAll();
  }
  rent(params: TAddRentParams): void {
    RentService.getInstance().add(params)
  }
  showAllRentings(): Rent[] {
    return RentService.getInstance().findAll()
  }
  showRentPrice(bookId: string): number {
    throw new Error("Method not implemented.");
  }
  showBillingHistory(userId: string): string {
    throw new Error("Method not implemented.");
  }
  pay(rentId: string): void {
    throw new Error("Method not implemented.");
  }
}