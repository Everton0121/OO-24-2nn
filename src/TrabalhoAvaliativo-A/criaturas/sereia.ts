import { criaturasMagicas } from "../criaturasMagicas"

export class sereia extends criaturasMagicas {
    usarMagia(): void {
        console.log(`${this.nome} irá usar uma magia do tipo ${this.tipo} e a força do seu poder é ${this.poder}`)
    }

    
}

let mySereia = new sereia ("Ariel", "Canto Hipnótico", 7 )
mySereia.usarMagia()