function calculoRentabilidadeReal(rentabilidade, inflacao){
    if(rentabilidade < 0 || !Number.isInteger(rentabilidade)){
        return 'ERRO'
    }

    if(inflacao < 0 || !Number.isInteger(inflacao)){
        return 'ERRO'
    }

    rentabilidade = rentabilidade / 100
    inflacao = inflacao / 100

    let rentabilidadeRealPorcentagem = 0

    rentabilidadeRealPorcentagem = ((1 + rentabilidade) / (1 + inflacao) - 1) * 100
    rentabilidadeRealPorcentagem = rentabilidadeRealPorcentagem.toFixed(1)

    return rentabilidadeRealPorcentagem
}

calculoRentabilidadeReal(8, 4)

console.log(calculoRentabilidadeReal(8, 4))

module.exports = {
    calculoRentabilidadeReal
}