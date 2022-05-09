const hashtag = {
    title: "NodeJs Backend",
    createDate: "15/01/2022",
    numberTweets: 10,
    description: "El nuevo nombre de la mascota de MissionNodeJS",

    getHashtagInfo: function(){
        return `${this.title} habla sobre ${this.description}`
    }
}
console.log("Título: " + hashtag.title)
console.log("Fecha de Publicación: " + hashtag.createDate)
console.log("Número de Tweets: " + hashtag.numberTweets)
console.log("Descripción: " + hashtag.description)
console.log(hashtag.getHashtagInfo())