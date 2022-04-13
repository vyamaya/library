export class User {
  id: string
  fullName: string
  address: string
  constructor(fullName: string, address: string){
    const verificaEspaco = (fullName: string) => fullName.indexOf(' ') >= 0
    if(!fullName || !address){throw new Error(`Nome completo ou endereço não podem ser vazios`)}
    if(!verificaEspaco(fullName)){throw new Error(`Por favor, insira o nome completo`)}
    this.id = (Math.random()* 100).toFixed(0).toString()
    this.fullName = fullName
    this.address = address
  }
}

export class UserService {
  users: User[] = []
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