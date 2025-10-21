const data = new Date();
const dataFormatada = new Intl.DateTimeFormat("pt-br", { dateStyle: "short", timeStyle: "short" }).format(data);

console.log(dataFormatada);