// Dados
const produtos = [
  {
    id: "001",
    nome: "Mouse sem fio",
    preco: 52.65,
    qtd: 2,
  },
  {
    id: "002",
    nome: "Teclado gamer Logitech",
    preco: 289.90,
    qtd: 1,
  }
];

console.table(produtos);

// A - Use push/unshift para adicionar dois itens (um no fim e outro no início).
produtos.push({
    id: "003",
    nome: "HUB USB",
    preco: 79.99,
    qtd: 1
});

produtos.unshift({
    id: "004",
    nome: "Fone bluetooth",
    preco: 129.90,
    qtd: 2
});

console.table(produtos);

// B - Remova o último item com pop e o primeiro com shift.

produtos.pop();
produtos.shift();

console.table(produtos);

// C - Calcule o total do carrinho com reduce.
let valorTotal = produtos.reduce((soma, {preco, qtd}) => soma + preco * qtd, 0);

console.log(`Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`);