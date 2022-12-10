function calculoRentabilidadePassada(precoAtual, precoAnterior){
    if(precoAtual < 0 || precoAnterior < 0){
        return 'ERRO'
    }
    let valorFinal = 0

    valorFinal = (precoAtual / precoAnterior) * 100 - 100
    valorFinal = valorFinal.toFixed(2)

    return valorFinal
}

calculoRentabilidadePassada(14, 9)

console.log(calculoRentabilidadePassada(14, 9))

module.exports = {
    calculoRentabilidadePassada
}