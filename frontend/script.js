const estadoSelect = document.getElementById("estado");
const tipoSelect = document.getElementById("tipo");
const precoLocalInput = document.getElementById("precoLocal");
const valorInput = document.getElementById("valorDinheiro");
const precoDiv = document.getElementById("preco");
const resultadoDiv = document.getElementById("resultado");
const comparacaoDiv = document.getElementById("comparacao");
const fonteDiv = document.getElementById("fonte");

const estados = {
    "br": "Brasil (Média Nacional)",
    "al": "Alagoas", "am": "Amazonas", "ce": "Ceará", "df": "Distrito Federal",
    "es": "Espírito Santo", "go": "Goiás", "ma": "Maranhão", "mt": "Mato Grosso",
    "mg": "Minas Gerais", "pr": "Paraná", "pb": "Paraíba", "pa": "Pará",
    "pe": "Pernambuco", "rs": "Rio Grande do Sul", "rj": "Rio de Janeiro",
    "sc": "Santa Catarina", "sp": "São Paulo"
};

// Preenche select
estadoSelect.innerHTML = "";
for (const sigla in estados) {
    const opt = document.createElement("option");
    opt.value = sigla;
    opt.textContent = estados[sigla];
    estadoSelect.appendChild(opt);
}

// Formatação de input para padrão BR
function formatarMoedaInput(input) {
    input.addEventListener("input", (e) => {
        let valor = e.target.value;
        // remove tudo que não for número
        valor = valor.replace(/[^\d]/g, "");
        // adiciona vírgula antes dos dois últimos dígitos
        if (valor.length > 2) {
            valor = valor.replace(/(\d+)(\d{2})$/, "$1,$2");
        }
        e.target.value = valor;
    });
}
formatarMoedaInput(precoLocalInput);
formatarMoedaInput(valorInput);

// Formata número para R$ X,XX
const formatBRL = (num) =>
    num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// Evento do botão
document.getElementById("calcular").addEventListener("click", async () => {
    const estado = estadoSelect.value;
    const tipo = tipoSelect.value;
    const precoLocal = parseFloat(precoLocalInput.value.replace(",", "."));
    const valorDinheiro = parseFloat(valorInput.value.replace(",", "."));

    if (!estado || isNaN(valorDinheiro)) {
        alert("Selecione um estado e insira o valor que deseja abastecer.");
        return;
    }

    try {
        const response = await fetch("/api/precos");
        const data = await response.json();

        const precoEstado = parseFloat(data.precos[tipo][estado].replace(",", "."));
        const litrosLocal = !isNaN(precoLocal) ? valorDinheiro / precoLocal : null;
        const litrosEstado = valorDinheiro / precoEstado;

        // Exibe preço médio estadual
        precoDiv.innerHTML = `<b>Preço médio no estado:</b> ${formatBRL(precoEstado)}`;

        // Exibe litros abastecidos
        resultadoDiv.innerHTML = litrosLocal
            ? `<b>Com ${formatBRL(valorDinheiro)}:</b><br>Você abastece ${litrosLocal.toFixed(2)} L (no posto local)`
            : `<b>Com ${formatBRL(valorDinheiro)}:</b><br>Você abastece ${litrosEstado.toFixed(2)} L (preço médio do estado)`;

        // Comparação percentual
        if (litrosLocal) {
            const diferenca = precoLocal - precoEstado;
            const perc = ((diferenca / precoEstado) * 100).toFixed(2);
            const status = diferenca > 0 ? "mais caro" : "mais barato";

            comparacaoDiv.innerHTML = `📊 Seu preço está <b>${Math.abs(perc)}%</b> ${status} que a média estadual.`;
        } else {
            comparacaoDiv.innerHTML = "Digite o preço local para comparar com o preço estadual.";
        }

        // Fonte da API
        fonteDiv.innerHTML = `Fonte: <a href="${data.fonte}" target="_blank">${data.fonte}</a><br><small>Última atualização: ${data.data_coleta}</small>`;

    } catch (err) {
        precoDiv.innerHTML = "<span style='color:red;'>Erro ao buscar dados da API.</span>";
        console.error(err);
    }
});
