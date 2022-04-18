import { TAddBookParams } from "Book/BookType";
import { TAddRentParams } from "Rent/RentType";
import { TAddUserParams } from "User/UserType";
import { Facade } from "./Facade";

const facade = new Facade

const user1: TAddUserParams = {fullName: "Fulano de Tal", address: "rua 1"}
const user2: TAddUserParams = {fullName: "Ciclano 2", address: "rua 2"}
const user3: TAddUserParams = {fullName: " Beltrano 3  ", address: "rua 3"}

const book1: TAddBookParams  = {type: "Lançamento", title: "Livro 1", pages: 200, year: "2022"}
const book2: TAddBookParams = {type: "Antigo", title: "Livro 2", pages: 400, year: "1990"}
const book3: TAddBookParams = {type: "Premium", title: "Livro 3", pages: 600, year: "2021"}
const newTitle = "Livro Editado"

const rent1: TAddRentParams = {userId: 1, bookId: 1, upto: "2022/05/14"}

facade.addBookToCatalog(book1)
facade.addBookToCatalog(book2)
facade.addBookToCatalog(book3)
facade.signupUser(user1)
facade.signupUser(user2)
facade.signupUser(user3)

facade.rent(rent1)

console.log("Livros cadastrados: ",facade.showAllBooksInCatalog())
console.log("Usuários cadastrados: ",facade.showAllUsers());

facade.editBookInCatalog(1, newTitle)
console.log("Editado: ", facade.showAllBooksInCatalog())
console.log("Lista de aluguéis: ", facade.showAllRentings());



