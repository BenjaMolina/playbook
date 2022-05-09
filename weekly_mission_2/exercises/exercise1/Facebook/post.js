const post = {
    usuario: "VG Alejandro",
    descripcion: "Hola, el día de hoy estoy aprendiendo a modelar objetos con NodeJS en JavaScript",
    reacciones: 350,

    getPostData: function(){
        return `${this.usuario} publicó ${this.descripcion} y reaccionaron ${ post.reacciones}`
    }
}
console.log(post.getPostData())