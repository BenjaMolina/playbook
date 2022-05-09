const pull_request = {
    title: "Pull Request",
    branchName: "main",
    dateCreated: "18/04/2022",
    status: "Close",
    repositoryNameAssociated: "Mission Backend",

    getStatus: function(){
      return this.status
    },

    getTitleAndAutor: function(){
      return `${this.title} en ${this.repositoryNameAssociated}`
    }
}

console.log(pull_request.getTitleAndAutor())