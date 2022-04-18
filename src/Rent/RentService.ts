import { Rent } from "./Rent"
import { TAddRentParams } from "./RentType"

export class RentService {
  private static instance: RentService
  rents: Rent[] = []
  private constructor() {}
  static getInstance() {
    if (!RentService.instance) {
      RentService.instance = new RentService()
    }
    return RentService.instance
  }
  add(params: TAddRentParams): Rent {
    const{userId, bookId, upto} = params
    try {
      const rent = new Rent(userId, bookId, upto)
      this.rents.push(rent)
      return rent
    } catch (error) {
      throw new Error(`RentService: ${error}`)
    }
  }
  findAll() {
    return this.rents
  }
}