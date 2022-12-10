const rentabilidadeReal = require('./rentabilidadeReal.js')

test('É esperado que a rentabilidade real seja de 3,8% caso a aplicação renda 8% ao ano e a inflação seja de 4%', () => {
    const functionRentabilidadeReal = rentabilidadeReal.calculoRentabilidadeReal(8,4)
    expect(functionRentabilidadeReal).toBe('3.8') 
})

test('É esperado que ocorra um erro se a rentabilidade for negativa ou decimal', () => {
    const functionRentabilidadeReal = rentabilidadeReal.calculoRentabilidadeReal(-8.5,4)
    expect(functionRentabilidadeReal).toBe('3.8') 
})

test('É esperado que ocorra um erro se a inflação for negativa ou decimal', () => {
    const functionRentabilidadeReal = rentabilidadeReal.calculoRentabilidadeReal(8, -4.5)
    expect(functionRentabilidadeReal).toBe('3.8') 
})