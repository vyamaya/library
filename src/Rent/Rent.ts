export class Rent {
  userId: number
  bookId: number
  upto: string
  constructor(userId: number, bookId: number, upto: string) {
    if (!userId || !bookId) {
      throw new Error(`id inválido`)
    }
    this.userId = userId
    this.bookId = bookId
    this.upto = upto
  }
}
