class Esfera{
    constructor(raio){
        this.raio = raio
    }
    calcularArea(){
        return 4 * Math.PI * (this.raio * this.raio)
    }
    calcularVolume(){
        return 4/3 * Math.PI * (this.raio * this.raio * this.raio)
    }
}
module.exports = Esfera

// área da esfera = 4 * PI * r²
// volume da esfera = 4/3 * PI * r³