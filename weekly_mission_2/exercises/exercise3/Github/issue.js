class Issue {
  constructor(titulo, status, author, dateCreated){
    this.titulo=  titulo
    this.status=  status
    this.author=  author
    this.dateCreated=  dateCreated
  }

  get titulo(){
      return this.titulo
  }
  set titulo(titulo){
      this.titulo = titulo
  }
  get status(){
    return this.status
  }
  set status(status){
      this.status = status
  }
  get author(){
    return this.author
  }
  set author(author){
      this.author = author
  }
}