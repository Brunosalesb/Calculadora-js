//adiciona numeros no visor
function calcNum(num) {
    if (typeof gvisor == 'undefined') {
        document.calcForm.visor.value = '';
    }
    document.calcForm.visor.value = document.calcForm.visor.value + num;
    gvisor = 1;
}

//limpa o visor
function calcClear() {
    document.calcForm.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
}

//realiza operações
function calcOperacao(operacao, valor1, valor2) {
    if (operacao == 'somar') {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    }
    else{
        if (operacao == 'subtrair') {
            var valor = parseFloat(valor1) - parseFloat(valor2);
        }
        else{
            if (operacao == 'multiplicar') {
                var valor = parseFloat(valor1) * parseFloat(valor2);
            }
            else{
                valor = parseFloat(valor1) / parseFloat(valor2);
            }
        }
    }
    return(valor);
}

//funcao de passagem das ações do usuário
function calcParse(operacao) {
    var valor = document.calcForm.visor.value;
    delete gvisor;

    if (typeof goper != 'undefined' && operacao == 'resultado') {
        gvalor = calcOperacao(goper, gvalor, valor);
        document.calcForm.visor.value = gvalor;
        delete operacao;
        delete gvalor;
        return(0);
    }

    if (typeof gvalor != 'undefined') {
        gvalor = calcOperacao(goper, gvalor, valor);
        goper = operacao;
        document.calcForm.visor.value = gvalor;
    }
    else{
        gvalor = valor;
        goper = operacao;
    }
}