import { User } from "./User"
import { TAddUserParams } from "./UserType"

export class UserService {
  private static instance: UserService
  users: User[] = []
  private constructor() {}
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }
  add(params: TAddUserParams): User {
    const{fullName, address}=params
    let lastId: number = 0
    if(this.users.length === 0) {
      lastId = 0
    }else {
      const findLastId = this.users.reduce((a, b)=> (a.id > b.id) ? a : b)
      lastId = findLastId.id
    }
    try {
      const user = new User(lastId +1, fullName, address)
      this.users.push(user)
      return user
    } catch (error) {
      throw new Error(`userService: ${error}`)
    }
  }

  findAll(): User[] {
    return this.users
  }
}