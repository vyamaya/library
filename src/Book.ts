const LIMITE_CARACTERE = 100

export class Book {
  id: number
  title: string
  constructor(id: number, title: string) {
    this.id = id
    this.title = title
  }
  setTitle(newTitle: string): void {
    if (newTitle.length > LIMITE_CARACTERE) {
      throw new Error(`Ultrapassou limite de ${LIMITE_CARACTERE} caracteres`)
    }
    this.title = newTitle
  }
}

export class BookService {
  books: Book[] = []

  add(title: string): Book {
    let lastId: number = 0
    if (this.books.length === 0) {
      lastId = 0
    } else {
      const findLastId = this.books.reduce((a, b) => (a.id > b.id) ? a : b)
      lastId = findLastId.id
    }
    try {
      const book = new Book(lastId + 1, title)
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
}