import { Book } from "./Book"
import { TAddBookParams } from "./BookType"

export class BookService {
  private static instance: BookService
  books: Book[] = []
  private constructor() {}
  static getInstance() {
    if (!BookService.instance) {
      BookService.instance = new BookService()
    }
    return BookService.instance
  }
  add(bookParams: TAddBookParams): Book {
    const {
      type,
      title,
      pages,
      year
    } = bookParams
    let lastId: number = 0
    if (this.books.length === 0) {
      lastId = 0
    } else {
      const findLastId = this.books.reduce((a, b) => (a.id > b.id) ? a : b)
      lastId = findLastId.id
    }
    try {
      const book = new Book(lastId + 1, type, title, pages, year)
      this.books.push(book)
      return book
    } catch (error) {
      throw new Error(`BookService: ${error}`)
    }
  }
  edit(bookId: number, newTitle: string) {
    this.books.forEach((book) => {
      if (book.id === bookId) {
        book.setTitle(newTitle)
      }
    })
  }
  findAll(): Book[] {
    return this.books
  }
  findById(bookId: number): Book {
    const book = this.books.find(book => book.id === bookId)
    if (!book) {
      throw new Error(`Livro não encontrado`)
    }
    try {
      return book
    } catch (error) {
      throw new Error(`BookService: ${error}`)
    }
  }
}