const rl = require('readline-sync')
const Esfera = require('./models/Esfera')
const Cilindro = require('./models/Cilindro')
const Cone = require('./models/Cone')
const Cubo = require('./models/Cubo')

let esfera = new Esfera(5)

let areaEsfera = esfera.calcularArea()
let volumeEsfera = esfera.calcularVolume()

console.log('ESFERA')

console.log(`o valor da area é de: ${areaEsfera.toFixed(3)}`)
console.log(`o valor do volume é de: ${volumeEsfera.toFixed(3)}`)

console.log('----------------------------------------------')


let cilindro = new Cilindro(3,4)

let areaBaseCilindro = cilindro.calcularAreaBase()
let areaLateralCilindro = cilindro.calcularAreaLateral()
let volumeCilindro = cilindro.calcularVolume()

console.log('CILINDRO')

console.log(`o valor da area base é de: ${areaBaseCilindro.toFixed(3)}`)
console.log(`o valor da area lateral é de: ${areaLateralCilindro.toFixed(3)}`)
console.log(`o valor do volume é de: ${volumeCilindro.toFixed(3)}`)

console.log('----------------------------------------------')

const raio = Number(rl.question('digite o valor do raio: '))
const altura = Number(rl.question('digite o valor da altura: '))
const geratriz = Number(rl.question('digite o valor da geratriz: '))

let cone = new Cone(raio,altura,geratriz)

let areaBaseCone = cone.calcularAreaBase()
let areaLateralCone = cone.calcularAreaLateral()
let volumeCone = cone.calcularVolume()

console.log('CONE')

console.log(`o valor da area base é de: ${areaBaseCone.toFixed(3)}`)
console.log(`o valor da area lateral é de: ${areaLateralCone.toFixed(3)}`)
console.log(`o valor do volume é de: ${volumeCone.toFixed(3)}`)


const aresta = Number(rl.question('digite o valor da aresta:: '))

let cubo = new Cubo(aresta)

let areaBase = cubo.calcularAreaBase()
let areaLateral = cubo.calcularAreaLateral()
let volume = cubo.calcularVolume()

console.log(`o valor da area base do cubo é de: ${areaBase.toFixed(3)}`)
console.log(`o valor da area lateral do cubo é de: ${areaLateral.toFixed(3)}`)
console.log(`o valor do volume do cubo é de: ${volume.toFixed(3)}`)