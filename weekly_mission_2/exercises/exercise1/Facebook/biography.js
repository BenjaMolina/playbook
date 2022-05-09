const biografia = {
    usuario: "bMolina",
    description: "Apasionado por la programacion",
    createDate: "20/06/2008",

    getData: function(){
        return `${this.usuario} dice: ${this.description} el ${this.createDate}`
    }
}
console.log(biografia.getData())