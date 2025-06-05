class NodeT<T> {
    constructor(
      public value: T,
      public height: number = 1,
      public left: NodeT<T> | null = null,
      public right: NodeT<T> | null = null
    ) {}
  }
  
  class AVLTree<T> {
    root: NodeT<T> | null = null;
  
    // Altura de um nó
    height(node: NodeT<T> | null): number {
      return node ? node.height : 0;
    }
  
    // Fator de balanceamento
    balanceFactor(node: NodeT<T> | null): number {
      return node ? this.height(node.left) - this.height(node.right) : 0;
    }
  
    // Atualiza a altura do nó
    updateHeight(node: NodeT<T>): void {
      node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }
  
    // Rotação à direita
    rotateRight(y: NodeT<T>): NodeT<T> {
      const x = y.left!;
      const T2 = x.right;
  
      x.right = y;
      y.left = T2;
  
      this.updateHeight(y);
      this.updateHeight(x);
  
      return x;
    }
  
    // Rotação à esquerda
    rotateLeft(x: NodeT<T>): NodeT<T> {
      const y = x.right!;
      const T2 = y.left;
  
      y.left = x;
      x.right = T2;
  
      this.updateHeight(x);
      this.updateHeight(y);
  
      return y;
    }
  
    // Inserção de um valor
    insert(value: T): void {
      this.root = this._insert(this.root, value);
    }
  
    private _insert(node: NodeT<T> | null, value: T): NodeT<T> {
      if (!node) {
        return new NodeT(value);
      }
  
      if (value < node.value) {
        node.left = this._insert(node.left, value);
      } else if (value > node.value) {
        node.right = this._insert(node.right, value);
      } else {
        return node; // valores duplicados não são permitidos
      }
  
      this.updateHeight(node);
  
      const balance = this.balanceFactor(node);
  
      // Caso Left Left
      if (balance > 1 && value < node.left!.value) {
        return this.rotateRight(node);
      }
  
      // Caso Right Right
      if (balance < -1 && value > node.right!.value) {
        return this.rotateLeft(node);
      }
  
      // Caso Left Right
      if (balance > 1 && value > node.left!.value) {
        node.left = this.rotateLeft(node.left!);
        return this.rotateRight(node);
      }
  
      // Caso Right Left
      if (balance < -1 && value < node.right!.value) {
        node.right = this.rotateRight(node.right!);
        return this.rotateLeft(node);
      }
  
      return node;
    }
  
    // Percurso em ordem para imprimir a árvore
    inOrder(): T[] {
      const result: T[] = [];
      this._inOrder(this.root, result);
      return result;
    }
  
    private _inOrder(node: NodeT<T> | null, result: T[]): void {
      if (node) {
        this._inOrder(node.left, result);
        result.push(node.value);
        this._inOrder(node.right, result);
      }
    }
  }

  const avl = new AVLTree<number>();

  // Inserindo valores na árvore
  avl.insert(15);
  avl.insert(44);
  avl.insert(7);
  avl.insert(33);
  avl.insert(18);
  avl.insert(22);
  avl.insert(34);
  avl.insert(9);
  avl.insert(200);
  avl.insert(190);
  avl.insert(24);
  avl.insert(14);
  avl.insert(76);
  avl.insert(98);
  avl.insert(41);
  avl.insert(65);
  avl.insert(47);
  avl.insert(21);
  avl.insert(11);
  avl.insert(12);
  avl.insert(29);
  avl.insert(199);
  avl.insert(144);
  avl.insert(141);
  avl.insert(114);
  

  
  // Realizando o percurso em ordem para verificar a estrutura da árvore
  console.log("Árvore AVL em ordem:", avl.inOrder());