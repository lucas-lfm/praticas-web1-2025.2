const cars = ["Ford", "Hyundai", "BMW", "Honda"];
const cars2 = cars.slice(1, 3);
// console.log(cars2); // Saída: Array [“Hyundai”, “BMW”]

//forEach() percorre todos os elementos do array executando uma função
// cars.forEach( valor => console.log(valor) );

const precos = [29.90, 56.49, 124.90, 239.90, 69.90];

// map() retorna um novo array, alterando os elementos do array original
let precosComDesconto = precos.map( preco => ( preco - preco * 0.1));
precosComDesconto = precosComDesconto.map( preco => Number(preco.toFixed(2)) );

console.log(precosComDesconto);

// filter() retorna um novo array, filtrando elementos do array original
// avalia uma condição lógica para determinar quais valores retornar
const precosFiltrados = precos.filter( preco => preco < 100 );
console.log(precosFiltrados);

// reduce()
// percorre todos os elementos, realizando um processamento e retornando um valor ao final
// é necessário uma variável acumuladora
const total = precos.reduce( (soma, preco) => soma += preco, 120 );
console.log("Valor total: R$", total)