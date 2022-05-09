class PullRequest {
  
    constructor(title,branchName,dateCreated,status){
      this.title = title
      this.branchName = branchName
      this.dateCreated =  dateCreated
      this.status =  status
    }

    get title(){
      return this.title
    }
    set title(title){
        this.title = title
    }
    get branchName(){
      return this.branchName
    }
    set branchName(branchName){
        this.branchName = branchName
    }
    get dateCreated(){
      return this.dateCreated
    }
    set dateCreated(dateCreated){
        this.dateCreated = dateCreated
    }
    get status(){
      return this.status
    }
    set status(status){
        this.status = status
    }
}
