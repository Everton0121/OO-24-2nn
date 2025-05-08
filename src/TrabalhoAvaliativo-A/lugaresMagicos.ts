export class lugaresMagicos {
  nome:string;
  andares:number;
  desafios:string[]=[];
 


 constructor(nomeConst:string, andaresConst:number, desafiosConst:string[],) {
     this.nome = nomeConst;
     this.andares = andaresConst;
     this.desafios = desafiosConst;


 
 }

 setNome(nomeConst:string):void{
  this.nome = nomeConst
 }
 setAndares(andaresConst:number):void{
  this.andares = andaresConst
 }
 setDesafios(desafiosConst:string[]):void{
  this.desafios = desafiosConst
 }
 getNome():string{
  return this.nome
 }
 getAndares():number{
  return this.andares
 }
 getDesafios():string[]{
  return this.desafios
 }
}

let Lugar1 = new lugaresMagicos("CasteloHogwarts",2,["Gigante armados"],)
console.log(Lugar1.getNome())
console.log(Lugar1.getAndares())
console.log(Lugar1.getDesafios())