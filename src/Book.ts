const LIMITE_CARACTERE = 100

export class Book {
  id: string
  title: string
  constructor(id: string, title: string) {
    this.id = id
    this.title = title
  }
  setTitle(newTitle: string): void { 
    if(newTitle.length > LIMITE_CARACTERE){throw new Error(`Ultrapassou limite de ${LIMITE_CARACTERE} caracteres`)}
    this.title = newTitle}
}

export class BookService {
  books: Book[] = []
  add(title: string): Book {
    try {
      const book = new Book((Math.random() * 100).toFixed(0).toString(), title)
      this.books.push(book)
      return book
    } catch (error) {
      throw new Error (`BookService: ${error}`)
    }
  }
  edit(bookId: string, newTitle: string) {
    const editBook = this.books.forEach((book)=>{
      if(book.id === bookId){
        book.setTitle(newTitle)
      }
    })
  }
  findAll(): Book[] {
    return this.books
  }
}