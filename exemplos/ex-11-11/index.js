// Template Literals
let name = "João";
console.log(`Olá, ${name}, seja bem-vindo! ${2 + 8}`);

// Desestruturação (destructuring)
const pessoa = {
  nome: "Maria",
  idade: 30,
  cidade: "São Paulo"
};

const { nome, idade, cidade } = pessoa;

console.log(nome);
console.log(idade);
console.log(cidade);

// Desestruturação de arrays
const nums = [25, 3, 10];
const [a, b, c] = nums;

let n1 = 5;
let n2 = 10;

[n1, n2] = [n2, n1];


// Spread Operator
const pessoa2 = {email: "maria.silva@gmail.com", ...pessoa};
console.log(pessoa2);