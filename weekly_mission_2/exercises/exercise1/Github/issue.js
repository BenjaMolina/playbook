const issue = {
    titulo: "Issue 1",
    status: "Active",
    author: "BMolina",
    dateCreated: "12/03/2022",
    
    gettituloAndAuthor: function(){
      return `${this.titulo} por ${this.author}`
    },

    getGeneralInfo: function(){
      return `This issue ${this.titulo} fue creado por ${this.author} el ${this.dateCreated}, con el status: ${this.status}`
    }
}

console.log(issue.getGeneralInfo())