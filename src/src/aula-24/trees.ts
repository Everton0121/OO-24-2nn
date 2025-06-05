export class Node<T>{
    protected value:T;
    children:Node<T>[]=[];

    constructor(valueConst?:T){
        this.value = valueConst;
    };

    addChild(child:Node<T>):void{
        this.children.push(child);
    };

        getChildren():Node<T>[]{
            return this.children;
        }
}

const rootNode = new Node("A")
const nodeB = new Node("B")
const nodeC = new Node("C")


rootNode.addChild(nodeB)
rootNode.addChild(nodeC)

/*
console.log(rootNode.getChildren())
console.log(nodeB.getChildren())
*/