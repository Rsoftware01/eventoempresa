// Função para formatar valores monetários
function formatCurrencyToTable(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Percentuais para cada assessor
const percentuais = {
  A67292: 0.665, // 66.5%
  A67311: 0.15, // 15%
  A20737: 0.04, // 4%
  A20482: 0.8, // 80%
};

// Função para calcular os valores e mostrar na tela
function calcularValores() {
  const assessorSelecionado = document.getElementById("assessor").value;
  const percentual = percentuais[assessorSelecionado];
  const valorInicial = 25000; // Valor fixo para todos os assessores
  const valorProjecao1 = 30000;
  const valorProjecao2 = 40000;

  // Calcula os valores com base nos inputs do usuário
  const valorAtual = valorInicial * percentual;
  const projecao1 = valorProjecao1 * percentual;
  const projecao2 = valorProjecao2 * percentual;

  // Atualiza o HTML com os resultados
  document.getElementById("resultado").innerHTML = `
        <p>Seu valor na empresa hoje é: ${formatCurrencyToTable(
          valorAtual
        )}.</p>
        <p>Projeções futuras:</p>
        <ol>
            <li>Projeção futura 1: ${formatCurrencyToTable(projecao1)}.</li>
            <li>Projeção futura 2: ${formatCurrencyToTable(projecao2)}.</li>
        </ol>
    `;

  // Exibe os campos adicionais
  document.getElementById("additional-inputs").style.display = "block";
}

// Função para calcular a projeção 3
function calcularProjecao3() {
  const valorProjecao3 = parseFloat(
    document.getElementById("projecao-amount").value.replace(",", ".")
  );
  const percentualProjecao3 =
    parseFloat(
      document.getElementById("projecao-percent").value.replace(",", ".")
    ) / 100; // Converte o percentual para decimal

  // Calcula a projeção 3 com base nos valores inseridos pelo usuário
  const projecao3 = valorProjecao3 * percentualProjecao3;

  // Limpa o conteúdo da projeção 3
  document.getElementById("projecao3").innerHTML = "";

  // Exibe a projeção 3
  document.getElementById("projecao3").innerHTML = `
          <p>Projeção futura 3: ${formatCurrencyToTable(projecao3)}.</p>
      `;
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
