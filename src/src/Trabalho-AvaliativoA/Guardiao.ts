import { criaturasMagicas } from "./criaturasMagicas"

export abstract class Guardiao extends criaturasMagicas{
   abstract protegerSegredo():void
   
  }

export class Tipos extends Guardiao{
   segredo:string

   constructor(nomeRecebido:string,tipoRecebido:string,poderRecebido:number,HPRecebido:number,segredoGuardado:string){
      super(nomeRecebido,tipoRecebido,poderRecebido,HPRecebido)
      this.segredo = segredoGuardado
     
   }

   protegerSegredo(): void {
      console.log(`O nome do guardiao é ${this.nome} tipo é ${this.tipo} e ele irá proteger ${this.segredo}`)
   }
   usarMagia(): number{
      console.log(`${this.nome} usou veneno letal. `)
      return this.poder
   }
   

   
}

export let myGuardian = new Tipos("Basilisk","Subterrâneo",2000,2000,"Camarã Secreta")

myGuardian.protegerSegredo()
myGuardian.usarMagia()




