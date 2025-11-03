const statusContainer = document.getElementById("status");

document
  .getElementById("domain-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const domainInput = document.getElementById("domain-input").value.trim();
    checkDomainStatus(domainInput);
  });

function checkDomainStatus(domain) {
  statusContainer.hidden = false;
  statusContainer.innerHTML = "Verificando...";
  statusContainer.className = "";

  fetch(`https://brasilapi.com.br/api/registrobr/v1/${domain}`)
    .then((res) => res.json())
    .then((json) => {
      const status = json.status;
      if (status === "REGISTERED") {
        statusContainer.innerHTML = '<span class="label-status unavailable">Indisponível</span>';
        statusContainer.innerHTML += `<p>O domínio <span class="domain">${json.fqdn}</span> já está registrado. Considere as sugestões abaixo:</p>`;
        statusContainer.innerHTML += `<ul class='suggestions'>
                ${
                  json.suggestions && json.suggestions.length > 0
                    ? json.suggestions
                        .map(
                          (suggestion) => `<li>${json.fqdn}.${suggestion}</li>`
                        )
                        .join("")
                    : "<li>Nenhuma sugestão disponível.</li>"
                }
            </ul>`;
      } else {
        statusContainer.innerHTML = '<span class="label-status available">Inativo</span>';
        statusContainer.innerHTML +=
          "<p>O domínio não está registrado. Entre em contato para mais informações.</p>";
      }
    });
}