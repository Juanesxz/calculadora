let ValorActual = "";
let ValorAnterior = "";
let operador = null;

document.querySelectorAll(".numero").forEach((button) => {
    button.addEventListener("click", () => {
        ValorActual += button.value;
        document.querySelector("#display").innerHTML = ValorActual;
    });
});

document
    .querySelectorAll("input[type=button]:not(.numero)")
    .forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button.value);

            switch (button.value) {
                case "AC":
                    ValorActual = "";
                    ValorAnterior = "";
                    operador = "";
                    document.querySelector("#display").innerHTML = "";
                    break;
                case "=":
                    if (ValorActual && ValorAnterior && operador) {
                        let value1 = parseFloat(ValorAnterior);
                        let value2 = parseFloat(ValorActual);
                        let resultado = "";
                        switch (operador) {
                            case "÷":
                                console.log("Dividiendo");
                                resultado = (value1 / value2).toString();
                                break;
                            case "x":
                                console.log("multiplicandos");
                                resultado = (value1 * value2).toString();
                                break;
                            case "-":
                                resultado = (value1 - value2).toString();
                                break;
                            case "+":
                                resultado = (value1 + value2).toString();
                                break;
                            case "%":
                                resultado = (value1 * value2 / 100)
                                break
                        }
                        ValorActual = resultado;
                        document.querySelector("#display").innerHTML = ValorActual;
                        ValorAnterior = "";
                        operador = null;
                    }
                    break;

                default:
                    if (ValorActual) {
                        ValorAnterior = ValorActual;
                    }
                    ValorActual = "";
                    operador = button.value;
                    if (ValorAnterior) {
                        document.querySelector("#display").innerHTML = `${button.value}`;
                    }
            }
        });
    });
