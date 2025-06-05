import { criaturasMagicas } from "./criaturasMagicas";

export class Dragao extends criaturasMagicas{
usarMagia(): number {
    console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
    return this.poder
}
}

export let myDragon = new Dragao("Banguela","Plasma Draconico",300,999.7)
myDragon.usarMagia()