// Na sua implementação, você deve pegar o domínio que o usuário informar no formulário da página HTML.
// Para fins de exemplo, aqui está um domínio fixo.
const domain = 'ifce.com.br';

// Fazendo a requisição para a API BrasilAPI para verificar o status do domínio
// O uso de 'await' aqui requer que o script seja do tipo módulo (type="module" no HTML)
// O await é usado para esperar a resposta da requisição antes de continuar a execução do código.
const data = await fetch(`https://brasilapi.com.br/api/registrobr/v1/${domain}`);

// Convertendo a resposta para JSON
// O uso de 'await' aqui também é necessário para esperar a conversão dos dados.
const domainInfo = await data.json();


// Verificando o status do domínio e exibindo as informações apropriadas no console
// Na sua implementação, você deve atualizar o DOM da página HTML em vez de usar console.log.
if (domainInfo.status === 'REGISTERED') {
    console.log(`O domínio ${domain} já está registrado.`);
    console.log(`Sugestões de domínios alternativos: ${domainInfo.suggestions.join(', ')}`);
} else {
    console.log(`O domínio ${domain} está disponível para registro.`);
}