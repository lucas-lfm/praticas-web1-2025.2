const alunos = ["Ivande", "Kauyves", "David", "Andreza"];

// alunos[4] = "John"; // é possível, mas não é indicado
alunos.push("John"); // adiciona um elemento ao final do array
console.log(alunos);

let removido = alunos.pop(); // remove o último elemento, retornando-o
console.log(alunos);
console.log("Item removido:", removido)

alunos.unshift("Lucas"); // adiciona no início
console.log(alunos);

removido = alunos.shift(); // remove o primeiro elemento, retornando-o
console.log(alunos);
console.log("Item removido:", removido);

delete alunos[1]; // remover um elemento preservando os índices do array
console.log(alunos, alunos[1]);

/** 
 * gera um vínculo por referência
 * alunos e copiaAlunos apontam para a mesma região de memória
 * isso acontece porque arrays e objetos são valores por referência
*/
const copiaAlunos = alunos; 
copiaAlunos.push("Novo Aluno");

console.log(copiaAlunos, alunos);

let a = 10;
let b = a; // gera uma cópia de valor

b += 5;

console.log(a, b); // a e b são variáveis independentes