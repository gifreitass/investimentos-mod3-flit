//Valorfinal = inicial * taxajuros * tempo

function calculoJurosSimples(valorInicial, taxaJuros, tempoCalculo){
    if(valorInicial < 0 || !Number.isInteger(valorInicial)){
        return 'ERRO'
    }

    if(taxaJuros < 0 || !Number.isInteger(taxaJuros)){
        return 'ERRO'
    }

    tempoCalculo = parseFloat(tempoCalculo)
    if(Number.isNaN(tempoCalculo)){
        return 'ERRO'
    }

    taxaJuros = taxaJuros / 100
    tempoCalculo = tempoCalculo * 12

    let valorFinal = 0

    valorFinal = valorInicial * taxaJuros * tempoCalculo

    return valorFinal
}

calculoJurosSimples(1000, 2, 1)

console.log(calculoJurosSimples(1000, 2, 1))

module.exports = {
    calculoJurosSimples
}