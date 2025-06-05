//implementacao

//exemplo de uso da fila


class Fila<T>{
    private elementos:T [] = [];

    enfileirar(item:T):void{
        this.elementos.push(item);
    }

    desenfileirar():T | undefined {
        if (this.estaVazia()){
            console.log("A fila esta vazia");
            return undefined;
        } return this.elementos.shift();
    }

    primeiro():T | undefined {
        if (this.estaVazia()){
            console.log("A fila esta vazia");
            return undefined;}
            return this.elementos[0];
    }

    estaVazia():boolean{
        return this.elementos.length === 0;
    }

    tamanho(): number {
        return this.elementos.length;
    }

}


const filaDeClientes = new Fila<string>();
filaDeClientes.enfileirar("cliente 1");
filaDeClientes.enfileirar("cliente 2");
filaDeClientes.enfileirar("cliente 3");
console.log(`Proximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`);
console.log(`Proximo cliente a ser atendido: ${filaDeClientes.desenfileirar()}`);
console.log(`Proximo cliente a ser atendido: ${filaDeClientes.estaVazia()}`);
