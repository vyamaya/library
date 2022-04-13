import { User, UserService } from "./User";
import { Facade } from "./Facade";

console.log("hello");

const facade = new Facade

const title1 = "livro1"
const title2 = "livro2"
const title3 = "livro3"
const newTitle = "Livro Editado"

facade.addBookToCatalog(title1)
facade.addBookToCatalog(title2)
facade.addBookToCatalog(title3)
facade.signupUser("fulano de tal", "rua 1")

const bookId = facade.showAllBooksInCatalog()[0].id
const userId = facade.showAllUsers()[0].id
const upto = "2022/05/12"

facade.rent(userId, bookId, upto)

console.log("id: ",bookId, userId);

console.log("Livros cadastrados: ",facade.showAllBooksInCatalog())
console.log("Usuários cadastrados: ",facade.showAllUsers());

facade.editBookInCatalog(bookId, newTitle)
console.log("Editado: ", facade.showAllBooksInCatalog())
console.log("Lista de aluguéis: ", facade.showAllRentings());



