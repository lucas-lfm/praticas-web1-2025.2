const alunos = [
  {
    nome: "David",
    notas: [9.0, 7.5, 10.0, 3.5],
  },
  {
    nome: "Danilo",
    notas: [8, 8.5, 2.0, 9.5],
  },
  {
    nome: "Kauyves",
    notas: [9.5, 4.5, 8.0, 9.5],
  },
];

// A) Crie um novo array com o nome e a média de cada aluno (map + reduce).
const mediaAlunos = alunos.map(({nome, notas}) => {
    const media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

    return {nome, media};
});

console.table(mediaAlunos);

