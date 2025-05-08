import { Animal } from "./animal";

export class cat extends Animal{

    constructor(name:string, weight:number,){
        super(name, weight);
    };
    meow():void{
        this.name = "cafezinho";
    console.log("meow meow")
    };

};


function relizaAcao(qualquerAnimal: Animal){
    qualquerAnimal.eat(1);

};

let meuAnimal = new Animal("geovana",2)
 let meuGato = new cat ("figo",3)
 relizaAcao(meuGato)
 relizaAcao(meuAnimal)