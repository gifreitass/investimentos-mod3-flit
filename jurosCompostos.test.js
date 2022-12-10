const jurosCompostos = require('./jurosCompostos.js')

test('É esperado que uma pessoa investindo R$1000 durante um ano com uma rentabilidade de 2% ao mês lucre R$268,24 ao fim da aplicação', () => {
    const functionJurosCompostos = jurosCompostos.calculoJurosCompostos(1000, 2, 1)
    expect(functionJurosCompostos).toBe('268.24')
})

test('É esperado que ocorra um erro se o valor inicial for negativo ou decimal', () => {
    const functionJurosCompostos = jurosCompostos.calculoJurosCompostos(-1000.5, 2, 1)
    expect(functionJurosCompostos).toBe('268.24')
})

test('É esperado que ocorra um erro se a taxa de juros for negativa ou decimal', () => {
    const functionJurosCompostos = jurosCompostos.calculoJurosCompostos(1000, -2.5, 1)
    expect(functionJurosCompostos).toBe('268.24')
})

test('É esperado que ocorra um erro se o tempo em anos não for um float', () => {
    const functionJurosCompostos = jurosCompostos.calculoJurosCompostos(1000, 2, 'um')
    expect(functionJurosCompostos).toBe('268.24')
})