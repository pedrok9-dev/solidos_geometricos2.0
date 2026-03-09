 class Cubo{
    constructor(aresta){
        this.aresta = aresta
    }
    calcularAreaBase(){
        return this.aresta * this.aresta
    }
    calcularAreaLateral(){
        return 4 * (this.aresta * this.aresta)
    }
    calcularVolume(){
        return this.aresta * this.aresta * this.aresta
    }
 }
 module.exports = Cubo