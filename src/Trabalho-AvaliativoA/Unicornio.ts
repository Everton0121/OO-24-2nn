import { criaturasMagicas } from "./criaturasMagicas"

export class unicornio extends criaturasMagicas{
usarMagia(): number {
    console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
    return this.poder
}
}

export let myUnicornio = new unicornio("Pegasus","Meteoro de Pegasus",75, 9999)
myUnicornio.usarMagia()