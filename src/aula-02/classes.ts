export class cat{
    
    //ATRIBUTOS
    name: string;
    weight: number;

    //CONSTRUCTOR
    constructor(nameCat: string, weightCat: number){
        this.name = nameCat
        this.weight = weightCat
    }

    //MÉTODOS
    meow(): void{
        console.log("Meow Meow")
    }
    eat(quantity: number): void{
    console.log("The cat has eaten " + quantity)
    }
    
}

const cat1 = new cat ("genw", 11)
cat1.meow()
cat1.eat(100)

const cat2 = new cat ("ben", 10)
cat2.meow()
cat2.eat(1250)
