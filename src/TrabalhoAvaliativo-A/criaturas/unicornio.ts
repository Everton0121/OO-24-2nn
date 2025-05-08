import { criaturasMagicas } from "../criaturasMagicas"

export class unicornio extends criaturasMagicas{
    usarMagia(): void {
        console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
};

}

let myUnicornio = new unicornio("Pegasus","Meteoro de Pegasus", 6969)
myUnicornio.usarMagia()