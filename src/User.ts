export class User {
  id: string
  fullName: string
  address: string
  constructor(fullName: string, address: string){
    const verificaEspaco = (fullName: string) => fullName.trim().indexOf(' ') >= 0
    if(!fullName || !address){throw new Error(`Nome completo ou endereço não podem ser vazios`)}
    if(!verificaEspaco(fullName)){throw new Error(`Por favor, insira o nome completo`)}
    this.id = (Math.random()* 100).toFixed(0).toString()
    this.fullName = fullName
    this.address = address
  }
}

export class UserService {
  private static instance: UserService
  users: User[] = []
  private constructor(){}
  static getInstance() {
    if(!UserService.instance){
      UserService.instance = new UserService()
    }
    return UserService.instance
  }
  add(fullName: string, address: string): User{ 
    try {
      const user = new User(fullName, address)
      this.users.push(user)
      return user
    } catch (error) {
      throw new Error (`userService: ${error}`)
    }
  }

  findAll(): User[] {
    return this.users
  }
}