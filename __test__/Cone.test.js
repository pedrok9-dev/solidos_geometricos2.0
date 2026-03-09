const Cone = require('../models/Cone')

describe('teste unitário classe cone',()=>{
    test('teste da area base do cone', ()=>{
        const cone = new Cone(2,6,3)
        const areaBase = 12.566
        expect(cone.calcularAreaBase()).toBeCloseTo(areaBase,3)
    })
    test('teste da area lateral do cone', ()=>{
        const cone = new Cone(2,6,3)
        const areaLateral = 18.850
        expect(cone.calcularAreaLateral()).toBeCloseTo(areaLateral,3)
    })
    test('teste do volume do cone', ()=>{
        const cone = new Cone(2,6,3)
        const volume = 25.133
        expect(cone.calcularVolume()).toBeCloseTo(volume,3)
    })
})