import { Ingrediente } from "./ingrediente";

export class pocoes {
    private nome:string;
    private ingredientes: {nome:string, quantidade:number, efeito:string}[] = [];
    private efeito: string[] = [];

    
    setNome(nomeRecebido:string) { this.nome = nomeRecebido;
        console.log('\nNome da pocao definido!');
    };

    
    getInfo():void {
        console.log('Ingredientes e seus efeitos:');
        console.table(this.ingredientes);
    };

    addIngrediente(ingredienteRecebido:Ingrediente) {
        let ingredienteRecebidoInfo: {nome:string, quantidade:number, efeito:string} = {
            nome: ingredienteRecebido.getNome(),
            quantidade: ingredienteRecebido.getQuantidade(),
            efeito: ingredienteRecebido.getEfeito()
        };

        this.efeito.push(ingredienteRecebidoInfo.efeito);
        this.ingredientes.push(ingredienteRecebidoInfo);
        console.log(`Ingrediente ${ingredienteRecebidoInfo.nome} adicionado!`);
    };

    prepararPocao():void {
        console.log(`Preparando ${this.nome}... \nPocao feita! Os efeitos foram adicionados a ela:`);
        for (let i = 0; i < this.efeito.length; i++) {
            console.log(this.efeito[i])
        };
    };
};

// Criacao da maconha

let ingrediente1 = new Ingrediente;
ingrediente1.setNome('perna de sapo');
ingrediente1.setQuantidade(2);
ingrediente1.setEfeito('Aumento de pulo');

let ingrediente2 = new Ingrediente;
ingrediente2.setNome('extrato de ferrão de gira-gira');
ingrediente2.setQuantidade(1);
ingrediente2.setEfeito('Gira-se igual a um Helicóptero');

// Criacao das pika

let pocao = new pocoes;
pocao.setNome('Pocao de Pica-pau');
pocao.addIngrediente(ingrediente1);
pocao.addIngrediente(ingrediente2);
pocao.getInfo();
pocao.prepararPocao();