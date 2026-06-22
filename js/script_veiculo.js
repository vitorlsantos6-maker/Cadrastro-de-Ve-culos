import { calcularIPVA } from "./script_calculo.js";

const form = document.getElementById("formVeiculo");
const lista = document.getElementById("listaVeiculos");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const modelo = document.getElementById("modelo").value;
    const marca = document.getElementById("marca").value;
    const placa = document.getElementById("placa").value;
    const ano = Number(document.getElementById("ano").value);
    const valor = Number(document.getElementById("valor").value);

    const combustivel =
    document.querySelector('input[name="combustivel"]:checked').value;

    const anoAtual = new Date().getFullYear();

    const idade = anoAtual - ano;

    const seguro = valor * 0.10;

    const ipva = calcularIPVA(valor, combustivel, idade);

    const licenciamento = 200;

    let valorFinal;

    if(ipva === "Isento"){
        valorFinal = seguro + licenciamento;
    } else {
        valorFinal = seguro + ipva + licenciamento;
    }

    const item = document.createElement("div");

    item.classList.add("veiculo");

    item.innerHTML = `
        <p><strong>Modelo:</strong> ${modelo}</p>
        <p><strong>Marca:</strong> ${marca}</p>
        <p><strong>Placa:</strong> ${placa}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Seguro:</strong> R$ ${seguro.toFixed(2)}</p>
        <p><strong>IPVA:</strong>
            ${ipva === "Isento" ? "Isento" : "R$ " + ipva.toFixed(2)}
        </p>
        <p><strong>Licenciamento:</strong> R$ ${licenciamento.toFixed(2)}</p>
        <p><strong>Valor Final:</strong> R$ ${valorFinal.toFixed(2)}</p>
        <hr>
    `;

    lista.appendChild(item);

    form.reset();

});