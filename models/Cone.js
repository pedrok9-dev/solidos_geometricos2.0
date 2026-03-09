class Cone{
    constructor(raio,altura,geratriz){
        this.raio = raio
        this.altura = altura
        this.geratriz = geratriz
    }
    calcularAreaBase(){
        return Math.PI * ( this.raio * this.raio)
    }
    calcularAreaLateral(){
        return Math.PI * this.raio * this.geratriz
    }
    calcularVolume(){
        return 1/3 * Math.PI * (this.raio * this.raio) * this.altura
    }
}
module.exports = Cone