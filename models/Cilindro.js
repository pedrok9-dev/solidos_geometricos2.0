class Cilindro{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }
    calcularAreaBase(){
        return Math.PI * (this.raio * this.raio)
    }
    calcularAreaLateral(){
        return 2 * Math.PI * this.raio * this.altura
    }
    calcularVolume(){
        return Math.PI * (this.raio * this.raio) * this.altura
    }
}
module.exports = Cilindro