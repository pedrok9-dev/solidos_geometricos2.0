const Esfera = require('../models/Esfera')

describe('teste unitário classe esfera', ()=>{
    test('teste do calculo da area', ()=>{
        const raio = 5
        const esfera = new Esfera(raio)
        const area = 314.159
        expect(esfera.calcularArea()).toBeCloseTo(area,3)
        //expect(esfera.calcularArea()).toBeCloseTo(area,3)
    })
    test('teste do calculo da area', ()=>{
        const raio = 5
        const esfera = new Esfera(raio)
        const volume = 523.599
        expect(esfera.calcularVolume()).toBeCloseTo(volume,3)
        //expect(esfera.calcularArea()).toBeCloseTo(area,3)
    })
})