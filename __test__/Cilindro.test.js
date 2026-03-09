const Cilindro = require('../models/Cilindro')

describe('teste unitário classe cilindro', ()=>{
    test('teste da area base do cilindro', ()=>{
        const raio = 3
        const cilindro = new Cilindro(raio)
        const areaBase = 28.274
        expect(cilindro.calcularAreaBase()).toBeCloseTo(areaBase,3)
    })
    test('teste da area lateral do cilindro', ()=>{
        const raio = 3
        const altura = 4
        const cilindro = new Cilindro(raio,altura)
        const areaLateral = 75.398
        expect(cilindro.calcularAreaLateral()).toBeCloseTo(areaLateral,3)
    })
    test('teste do volume do cilindro', ()=>{
        const raio = 3
        const altura = 4
        const cilindro = new Cilindro(raio,altura)
        const volume = 113.097
        expect(cilindro.calcularVolume()).toBeCloseTo(volume,3)
    })
})