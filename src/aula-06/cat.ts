export class Cat{
    public name:string;
    protected race:string;
    private weight:number;
    
    constructor(nameConst:string, weightConst:number, raceConst:string){
    this.name = nameConst;
    this.weight = weightConst;
    this.race = raceConst; 
}

    public meow():void {console.log("Meow Meow");}
    protected showRace(): string { return this.race;}
    private revealWeight(): number{ return this.weight;}
    }
    
    const cat1 = new Cat("Daeny", 5, "SRD");
    cat1.meow(); 
    // Acessível 
    // cat1.showRace(); 
    // Erro: showRace() é protegido 
    // cat1.revealWeight(); 
    // Erro: Erro: revealWeight() é privado