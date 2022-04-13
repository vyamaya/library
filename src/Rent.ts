export class Rent {
  userId: string
  bookId: string
  upto: string
  constructor(userId: string, bookId: string, upto: string){
    if(!userId || !bookId){throw new Error (`id inválido`)}
    this.userId = userId
    this.bookId = bookId
    this.upto = upto
  }
}

export class RentService {
  rents: Rent[] = []
  add(userId: string, bookId:string, upto: string): Rent {
    try {
      const rent = new Rent(userId, bookId, upto)
      this.rents.push(rent)
      return rent
    } catch (error) {
      throw new Error (`RentService: ${error}`)
    }
  }
  findAll(){
    return this.rents
  }
}