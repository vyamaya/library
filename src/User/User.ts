export class User {
  id: number
  fullName: string
  address: string
  constructor(id:number, fullName: string, address: string) {
    const verificaEspaco = (fullName: string) => fullName.trim().indexOf(' ') >= 0
    if (!fullName || !address) {
      throw new Error(`Nome completo ou endereço não podem ser vazios`)
    }
    if (!verificaEspaco(fullName)) {
      throw new Error(`Por favor, insira o nome completo`)
    }
    this.id = id
    this.fullName = fullName.trim()
    this.address = address
  }
}
