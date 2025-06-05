import { PersonagemTemporal } from "./personagemTemporal";

export class FilaTemporal<T> {
    private elementos:T [] = [];

    enfileirar(item:T):void{
        this.elementos.push(item);
    };

    desenfileirar():T | undefined {
        if (this.estaVazia()){
            console.log("Nao a heroi presente");
            return undefined;
        } return this.elementos.shift();
    };

    primeiro():T | undefined {
        if (this.estaVazia()){
            console.log("Nao a heroi presente");
            return undefined;}
            return this.elementos[0];
    };

    estaVazia():boolean{
        return this.elementos.length === 0;
    };

    tamanho(): number {
        return this.elementos.length;
    };

    exibirFila(): void {
        console.table(this.elementos)
    };

};

const personagens = [ new PersonagemTemporal("homem de ferro","316",1), 
                      new PersonagemTemporal("homem aranha", "317", 2),
                      new PersonagemTemporal("capitao america", "318", 3),
 ];
 
const FilaTemporal1 = new FilaTemporal();

for (let e of personagens) {
    FilaTemporal1.enfileirar(e)
};

console.log(`A fila está vazia?  ${FilaTemporal1.estaVazia()}`);
console.log(`Tamanho da fila:    ${FilaTemporal1.tamanho()}`);

FilaTemporal1.exibirFila();