const renderizar = function (dados) {
  let txtStatus;
  let listaSugestoes = null;

  if (dados.status === "REGISTERED") {
    txtStatus = "<p>Domínio registrado! Analise as opções abaixo:</p>";
    listaSugestoes = document.createElement("ul");

    for (let sugestao of dados.suggestions) {
      const item = document.createElement("li");
      item.innerText = sugestao;
      listaSugestoes.appendChild(item);
    }
  } else {
    txtStatus = "<p>Domínio disponível! Entre em contato.</p>";
  }

  const divStatus = document.getElementById("status");

  divStatus.innerHTML = txtStatus;
  divStatus.hidden = false;

  if (listaSugestoes) {
    divStatus.appendChild(listaSugestoes);
  }
};

const form = document.getElementById("domain-form");

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();

  const domain = form.querySelector("#domain-input").value;

  // Fazendo a requisição para a API BrasilAPI para verificar o status do domínio
  // O uso de 'await' aqui requer que a função seja assíncrona (async)
  // O await é usado para esperar a resposta da requisição antes de continuar a execução do código.
  const data = await fetch(
    `https://brasilapi.com.br/api/registrobr/v1/${domain}`
  );

  // Convertendo a resposta para JSON
  // O uso de 'await' aqui também é necessário para esperar a conversão dos dados.
  const domainInfo = await data.json();

  renderizar(domainInfo);
});
