const rentabilidadePassada = require('./rentabilidadePassada.js')

test('É esperado que o rendimento seja de 55,55% caso uma ação seja comprada por R$9 e depois de um ano ela esteja valendo R$14', () => {
    const functionRentabilidadePassada = rentabilidadePassada.calculoRentabilidadePassada(14, 9)
    expect(functionRentabilidadePassada).toBe('55.56') 
})

test('É esperado que ocorra um erro se o preço atual for negativo', () => {
    const functionRentabilidadePassada = rentabilidadePassada.calculoRentabilidadePassada(-14, 9)
    expect(functionRentabilidadePassada).toBe('55.56') 
})

test('É esperado que ocorra um erro se o preço anterior for negativo', () => {
    const functionRentabilidadePassada = rentabilidadePassada.calculoRentabilidadePassada(14, -9)
    expect(functionRentabilidadePassada).toBe('55.56') 
})