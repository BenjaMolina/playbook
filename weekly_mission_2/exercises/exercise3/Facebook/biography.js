class Biografia {
    
    constructor(usuario,description,createDate){
        this.usuario = usuario
        this.description = description
        this.createDate = createDate
    }
    
    get usuario(){
        return this.usuario
    }
    set usuario(usuario){
        this.usuario = usuario
    }
    get description(){
        return this.description
    }
    set description(description){
        this.description = description
    }
    get createDate(){
        return this.createDate
    }
    set createDate(createDate){
        this.createDate = createDate
    }
    


}
