export class Animal {
    protected name : string;
    protected weight : number;

    constructor(nameConst:string, wheightCost:number,) {
        this.name = nameConst
        this.weight = wheightCost
    };

    eat(quantity:number):void{
        console.log("the animal has eaten: " + quantity); //concatenacao
        console.log(`the animal has eaten:${quantity} `) //template
    };

};