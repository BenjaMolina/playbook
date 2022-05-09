class Repo {
    

  constructor(name,authorname,languagename,){
    this.name = name
    this.authorname = authorname
    this.languagename = languagename
  }

  get name(){
    return this.name
  }
  set name(name){
      this.name = name
  }
  get authorname(){
    return this.authorname
  }
  set authorname(authorname){
      this.authorname = authorname
  }

}
