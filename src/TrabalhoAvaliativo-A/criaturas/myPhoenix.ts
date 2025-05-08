import { criaturasMagicas } from "../criaturasMagicas"

export class Phoenix extends criaturasMagicas{
    usarMagia(): void {
        console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
    }
}

let myPhoenix = new Phoenix("Fawkes","Renascimento das cinzas",0)
myPhoenix.usarMagia()