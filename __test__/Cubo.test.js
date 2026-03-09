const Cubo = require('../models/Cubo')

describe('teste unitário classe cubo', () =>{
    test('teste do calcular area base do cubo', ()=>{
        const cubo = new Cubo(3)
        const areaBase = 9.000
        expect(cubo.calcularAreaBase()).toBeCloseTo(areaBase,3)
    })
    test('teste do calcular area lateral do cubo', ()=>{
        const cubo = new Cubo(3)
        const areaLateral = 36.000
        expect(cubo.calcularAreaLateral()).toBeCloseTo(areaLateral,3)
    })
    test('teste do calcular volume do cubo', ()=>{
        const cubo = new Cubo(3)
        const volume = 27.000
        expect(cubo.calcularVolume()).toBeCloseTo(volume,3)
    })
})