

interface grimorio {
    nome: string;
    consultarFeitico(feiticoRecebido:string):void;
    
}
    
class diretor implements grimorio {
    nome: string;
    feitico: { [nome: string]: string };

    constructor(nome: string) {
    this.nome = nome;
    this.feitico = {
        "Lumos": "cria luz na ponta da varinha.",
        "Expelliarmus": "desarma o oponente.",
        "Expecto Patronum": "invoca um Patrono para afastar Dementadores.",
        "Alohomora": "abre portas trancadas.",
        "Wingardium Leviosa": "faz objetos levitarem."
    };
    }

    consultarFeitico(feiticoRecebido:string): void {
        for (let feitico1 in this.feitico) {
            if(feitico1===feiticoRecebido){
            console.log(`O diretor ${this.nome} consultou o feitiço ${feitico1}`)
            console.log(`${this.nome} sabe que o feitiço ${this.feitico[feitico1]}`)
        
        }}
    };
}

let AlbusDumbledore = new diretor("Albus Dumbledore");
AlbusDumbledore.consultarFeitico("Lumos")

AlbusDumbledore.consultarFeitico("Expelliarmus")

AlbusDumbledore.consultarFeitico("Expecto Patronum")

AlbusDumbledore.consultarFeitico("Alohomora")

AlbusDumbledore.consultarFeitico("Wingardium Leviosa")
