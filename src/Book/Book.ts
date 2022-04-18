import { TBookType } from "./BookType"

const LIMITE_CARACTERE = 100

export class Book {
  id: number
  type: TBookType
  title: string
  pages: number
  year: string
  constructor(id: number, type: TBookType, title: string, pages: number, year: string) {
    this.id = id
    this.type = type
    this.title = title
    this.pages = pages
    this.year = year
  }
  setTitle(newTitle: string): void {
    if (newTitle.length > LIMITE_CARACTERE) {
      throw new Error(`Ultrapassou limite de ${LIMITE_CARACTERE} caracteres`)
    }
    this.title = newTitle
  }
}
