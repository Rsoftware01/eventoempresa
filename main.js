// Função para formatar valores monetários
function formatCurrencyToTable(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function formatCurrencyToTablee(value) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
}

const percentuais = {
  A67292: 60.414,
  A67311: 14.472,
  A20737: 6.0,
  A20482: 4.0,
  A68558: 3.0,
  A69285: 1.681,
  A23064: 1.585,
  A23446: 1.501,
  A25698: 1.367,
  A70916: 1.018,
  A25637: 0.922,
  A67280: 0.819,
  A24174: 0.81,
  A26237: 0.786,
  A23832: 0.71,
  A25723: 0.437,
  A25697: 0.27,
  A20997: 0.01,
  A69793: 0.01,
  A21756: 0.01,
  A25041: 0.01,
  A70408: 0.001,
  A70751: 0.001,
  A71522: 0.001,
  A72391: 0.001,
  A72759: 0.001,
  A73596: 0.001,
  A74588: 0.001,
  A74970: 0.001,
  A27394: 0.001,
  A30309: 0.001,
  A30003: 0.001,
  A33644: 0.001,
  A33363: 0.001,
  A35185: 0.001,
  Avand: 0.001,
  AGuinle: 0.001,
  A37761: 0.001,
  A41437: 0.001,
  A42813: 0.001,
  A69297: 0.001,
  A44413: 0.001,
  A35946: 0.001,
  A44127: 0.001,
  CS8793: 0.001,
  A38021: 0.001,
};

console.log(percentuais);

// Função para calcular os valores e mostrar na tela
function calcularValores() {
  // Mostra a animação de carregamento
  document.getElementById("loading-animation").style.display = "block";
  // Limpa a projeção 3 e os campos de valor e percentual

  document.getElementById("projecao-amount").value = "";
  document.getElementById("projecao-percent").value = "";
  document.getElementById("projecao3").innerHTML = "";

  const assessorSelecionado = document.getElementById("assessor").value;
  const percentual = percentuais[assessorSelecionado];
  const valorInicial = 21230366.91; // Valor fixo para todos os assessores
  const valorProjecao1 = 25000000;
  const valorProjecao2 = 30000000;

  // Calcula os valores com base nos inputs do usuário
  const valorAtual = valorInicial * (percentual / 100);
  const projecao1 = valorProjecao1 * (percentual / 100);
  const projecao2 = valorProjecao2 * (percentual / 100);

  // Atualiza o HTML com os resultados
  document.getElementById("resultado").innerHTML = `
    <p class="font-bold">Participação na empresa: ${formatCurrencyToTablee(
      percentual
    )}%.</p>
    <p class="bg-cyan-800">-</p>
    <p class="font-bold">Valor da empresa em Jun/23:</p> <!-- Adicionando a classe font-bold -->
    <p>Valor da empresa: ${formatCurrencyToTable(valorInicial)}.</p>
    <p>Valor no Partnership: ${formatCurrencyToTable(valorAtual)}.</p>
    <p class="bg-cyan-800">-</p>
    <p class="font-bold">Valor da empresa em Dez/23:</p> <!-- Adicionando a classe font-bold -->
    <ol>
        <li>Valor da empresa: ${formatCurrencyToTable(valorProjecao1)}.</li>
        <li>Valor no Partnership: ${formatCurrencyToTable(projecao1)}.</li>
    </ol>
    <p class="bg-cyan-800">-</p>
    <p class="font-bold">Possível valor em Jun/24:</p> <!-- Adicionando a classe font-bold -->
    <ol>
        <li>Valor da empresa: ${formatCurrencyToTable(valorProjecao2)}.</li>
        <li>Valor no Partnership: ${formatCurrencyToTable(projecao2)}.</li>
    </ol>
    <p class="bg-cyan-800">-</p>
    <p class="font-bold">Simule outros valores (Valor da empresa * Participação na empresa)</p>
`;

  // Exibe os campos adicionais
  document.getElementById("additional-inputs").style.display = "block";
  // Use setTimeout para remover a animação após 3 segundos
  setTimeout(function () {
    document.getElementById("loading-animation").style.display = "none";
  }, 1000);
}

// Função para calcular a projeção 3
function calcularProjecao3() {
  // Mostra a animação de carregamento
  document.getElementById("loading-animation").style.display = "block";

  // Remove temporariamente o atributo required dos campos
  document.getElementById("projecao-amount").removeAttribute("required");
  document.getElementById("projecao-percent").removeAttribute("required");

  // Verifica se os campos estão preenchidos
  if (
    document.getElementById("projecao-amount").value.trim() !== "" &&
    document.getElementById("projecao-percent").value.trim() !== ""
  ) {
    // Verifica se os valores inseridos são números
    const valorProjecao3 = parseFloat(
      document
        .getElementById("projecao-amount")
        .value.replace(/\./g, "")
        .replace(",", ".")
    );
    const percentualProjecao3 = parseFloat(
      document
        .getElementById("projecao-percent")
        .value.replace(/\./g, ",") // Substitui todos os pontos por vírgulas
        .replace(",", ".") // Substitui a primeira vírgula por ponto para garantir que seja considerado como separador decimal
    );

    // Verifica se os valores são números válidos
    if (!isNaN(valorProjecao3) && !isNaN(percentualProjecao3)) {
      // Calcula a projeção 3 com base nos valores inseridos pelo usuário
      const projecao3 = valorProjecao3 * (percentualProjecao3 / 100);

      // Limpa o conteúdo da projeção 3
      document.getElementById("projecao3").innerHTML = "";

      // Exibe a projeção 3
      document.getElementById("projecao3").innerHTML = `
              <p class="font-bold">Simulações: </p> <!-- Adicionando a classe font-bold -->
              <ol>
              <li>Valor da empresa: ${formatCurrencyToTable(
                valorProjecao3
              )}.</li>
              <li>Participação na empresa: ${formatCurrencyToTablee(
                percentualProjecao3
              )}%.</li>
              </ol>
                <p>Valor no Partnership: ${formatCurrencyToTable(
                  projecao3
                )}.</p>
            `;
    } else {
      // Exibe uma mensagem de erro se valores não numéricos forem inseridos
      alert("Por favor, insira apenas números nos campos.");
    }
  }

  // Recoloca o atributo required após o cálculo ou se os campos estiverem vazios
  document.getElementById("projecao-amount").setAttribute("required", true);
  document.getElementById("projecao-percent").setAttribute("required", true);

  // Use setTimeout para remover a animação após 3 segundos
  setTimeout(function () {
    document.getElementById("loading-animation").style.display = "none";
  }, 1000);
}

// Adiciona um event listener para o botão "Mostrar Campos Adicionais"
document
  .getElementById("mostrar-campos-adicionais")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão de submit
    calcularValores();
  });

// Adiciona um event listener para o botão "Calcular Projeção 3"
document
  .getElementById("calcular-projecao")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do botão de submit
    calcularProjecao3();
  });
