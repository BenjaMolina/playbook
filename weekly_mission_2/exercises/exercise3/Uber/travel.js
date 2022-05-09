const travel = {
    usuario: "Michell",
    conductor: "Marcos",
    carro: "Nissan 2017 gris",
    estrellas: 4.8,
    metodoPaga: "Efectivo",
    costo: 250.00,

    getData: function(){
        return `${this.conductor} ha aceptado el viaje de ${this.usuario}`
    }
}


console.log(travel.getData())