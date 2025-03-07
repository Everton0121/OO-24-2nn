import { Cat } from "./cat";

export class Siames extends cat{
    public showRaceSiames():string{
        return this.showRace();
    }
}

let meuGato = new Siames("cafexinho","listradinho",6)