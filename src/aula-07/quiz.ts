class Distrito {
    private recursos: string[];
    public populacao: number;

    constructor(public nome: string, populacao: number, recursos: string[]) {
        this.populacao = populacao;
        this.recursos = recursos;
    }

    public fornecerRecursos(): string[] {
        return this.recursos;
    }
}

class Tributo01 {
    constructor(public nome: string, private distrito: Distrito) {}

    public coletarRecursos(): string[] | string {
        return this.distrito.fornecerRecursos();
    }
}

const distrito12 = new Distrito("Distrito 12", 8000, ["Arco e flecha", "Plantas medicinais"]);
const katniss01 = new Tributo01("Katniss", distrito12);

console.log(katniss01.coletarRecursos());


class Tributo02 {
    private segredo: string;

    constructor(public nome: string, segredo: string) {
        this.segredo = segredo;
    }

    public revelarSegredo(): string {
        return this.segredo;
    }
}

const katniss02 = new Tributo02("Katniss", "Sou boa com arco e flecha.");

console.log(katniss02.revelarSegredo());

























class Tributo {
    constructor(public nome: string, public vida: number) {}

    public sofrerDano(dano: number): void {
        this.vida -= dano;
        console.log(`${this.nome} sofreu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

class Organizador {
    constructor(private tributos: Tributo[]) {}

    public punirTributo(tributo: Tributo, dano: number): void {
        tributo.sofrerDano(dano);
    }
}

const katniss = new Tributo("Katniss", 100);
const peeta = new Tributo("Peeta", 90);
const organizador = new Organizador([katniss, peeta]);

organizador.punirTributo(katniss, 20);