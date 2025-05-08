import { criaturasMagicas } from "../criaturasMagicas"

export class Dragao extends criaturasMagicas{
usarMagia(): void {
    console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
}
}

let myDragon = new Dragao("Banguela","Plasma Draconico",999.7)
myDragon.usarMagia()