
export class Rent {
  userId: string
  bookId: number
  upto: string
  constructor(userId: string, bookId: number, upto: string){ 
    if(!userId || !bookId){throw new Error (`id inválido`)}
    this.userId = userId
    this.bookId = bookId
    this.upto = upto
  }
}

export class RentService {
  private static instance: RentService
  rents: Rent[] = []
  private constructor(){}
  static getInstance() {
    if(!RentService.instance){
      RentService.instance = new RentService()
    }
    return RentService.instance
  }
  add(userId: string, bookId:number, upto: string): Rent {
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