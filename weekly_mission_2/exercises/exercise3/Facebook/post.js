class Post {
    
    constructor(usuario,descripcion,reacciones){
        this.usuario =  usuario
        this.descripcion =  descripcion
        this.reacciones =  reacciones
    }
    
    get usuario(){
        return this.usuario
    }
    set usuario(usuario){
        this.usuario = usuario
    }

    get descripcion(){
        return this.descripcion
    }
    set descripcion(descripcion){
        this.descripcion = descripcion
    }

    get reacciones(){
        return this.reacciones
    }
    set reacciones(reacciones){
        this.reacciones = reacciones
    }


}
