export function calcularIPVA(valorVeiculo, combustivel, idade) {

    if (idade > 20) {
        return "Isento";
    }

    let percentual = 0;

    switch (combustivel) {

        case "gasolina":
            percentual = 0.20;
            break;

        case "etanol":
            percentual = 0.15;
            break;

        case "bicombustivel":
            percentual = 0.10;
            break;

        case "hibrido":
            percentual = 0.08;
            break;

        case "eletrico":
            percentual = 0.02;
            break;
    }

    return valorVeiculo * percentual;
}