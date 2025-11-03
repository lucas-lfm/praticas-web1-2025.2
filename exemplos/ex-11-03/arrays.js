const produtos = [
  { id: "P-0001", sku: "CABO-TC-1M", nome: "Cabo USB-C 1m", categoria: "Acessórios", preco: 29.9, estoque: 120 },
  { id: "P-0002", sku: "FONE-BT-OVER", nome: "Fone Bluetooth Over-Ear", categoria: "Eletrônicos", preco: 199.9, estoque: 45 },
  { id: "P-0003", sku: "MOCH-NTB-15", nome: "Mochila p/ Notebook 15\"", categoria: "Acessórios", preco: 159.9, estoque: 80 },
  { id: "P-0004", sku: "TECL-MEC-ABNT", nome: "Teclado Mecânico ABNT", categoria: "Informática", preco: 289.9, estoque: 32 },
  { id: "P-0005", sku: "GARR-TERM-750", nome: "Garrafa Térmica 750ml", categoria: "Casa & Cozinha", preco: 99.9, estoque: 150 },
  { id: "P-0006", sku: "CAMI-BAS-UNI", nome: "Camiseta Básica Unissex", categoria: "Moda", preco: 49.9, estoque: 300 },
  { id: "P-0007", sku: "LIVR-JS-2025", nome: "Livro: JavaScript Moderno", categoria: "Livros", preco: 129.9, estoque: 60 },
  { id: "P-0008", sku: "CREM-HIDRO-200", nome: "Creme Hidratante 200ml", categoria: "Beleza", preco: 39.9, estoque: 110 },
  { id: "P-0009", sku: "BALA-PRO-900", nome: "Balança Digital 900g", categoria: "Casa & Cozinha", preco: 69.9, estoque: 70 },
  { id: "P-0010", sku: "BOLA-FUT-OFI", nome: "Bola de Futebol Oficial", categoria: "Esportes", preco: 159.9, estoque: 40 }
];

const aplicarDesc = (produto) => {
    // spread operator - espalhar os atributos do objeto
    // cópia do array original
    const newProduto = {...produto}; 
    newProduto.preco = newProduto.preco * 0.9;

    return newProduto;
}

const produtosComDesc = produtos.map(aplicarDesc);

//console.table(produtos);
//console.table(produtosComDesc);

const estoqueBaixo = produtos.filter( produto => produto.estoque < 60 );

// console.table(estoqueBaixo);

const valorTotal = produtos.reduce((acc, produto) => acc + produto.preco, 0);

console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);

// Composição de funções 
const valor = produtos.filter(produto => produto.estoque < 60)
                        .map(aplicarDesc)
                        .reduce((acc, produto) => acc + produto.preco, 0);

console.log(valor.toFixed(2));