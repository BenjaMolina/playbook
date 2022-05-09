const user = {
    user: "carlo",
    username: "carlogilmar",
    bio: "NODeJS Back",
    createDate: "15/08/2015",
    numberTweets: 10,
    age: 20,

    getData: function(){
        return `${this.username} dice ${this.bio}`
    }
}
console.log("Nombre: " + user.user)
console.log("Usuario: " + user.username)
console.log("Biografía: " + user.bio)
console.log("Creacion: " + user.createDate)
console.log("Número de Tweets: " + user.numberTweets)
console.log("Edad: " + user.age)
console.log("Información general de " + user.getData())