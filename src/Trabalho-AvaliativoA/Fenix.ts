import { criaturasMagicas } from "./criaturasMagicas";

export class Phoenix extends criaturasMagicas{
    usarMagia(): number {
        console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
        return this.poder
    }
}

export let myPhoenix = new Phoenix("Fawkes","Renascimento das cinzas",99999999,0)
myPhoenix.usarMagia()