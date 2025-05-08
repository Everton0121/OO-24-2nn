import { Distrito } from "./distrito";

export class Organizador {
    private nome: string;
    private distritos: Distrito[];

    constructor(nome: string, distritos: Distrito[]) {
        this.nome = nome;
        this.distritos = distritos;        
};

public setNome(nomeRecebido: string): void { this.nome = nomeRecebido
};

public setDistritos(distritosRecebidos: Distrito[]): void { this.distritos = distritosRecebidos
};

public getNome(): string { return this.nome
};

public getDistritos(): Distrito[] { return this.distritos
};

public liberarAnimais(): void {
    const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
    console.log(`O Organizador ${this.nome} liberou bixos no Distrito ${this.distritos[distritoAleatorio]}! fuja!`)
};

public criarDesastre(): void {
    let listaDesastre = ['Chuva de fogo', 'Tornados', 'Fumaca de gas', 'tespestade']
    const desastreAleatorio = Math.floor(Math.random() * listaDesastre.length);
    const distritoAleatorio = Math.floor(Math.random() * this.distritos.length);
    console.log(`O Organizador '${this.nome} botou ${listaDesastre[desastreAleatorio]} no Distrito ${this.distritos[distritoAleatorio]}!`)
};

};