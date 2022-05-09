const perfil = {
    ciudad: "MExico",
    estadoCivil: "Soltero",
    genero: "Hombre",
    perfil: "BMolina",
    cumpleaños: "25/08/2001",
    edad: 20,
    amigos: 250,

    getData: function(){
        return `${this.perfil} vive en ${this.ciudad} cumple años el ${this.cumpleaños} y tiene ${this.amigos} amigos`
    }
}

console.log(perfil.getData())