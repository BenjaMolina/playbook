class Usuario{
    
    constructor(ciudad,estadoCivil,genero){
        this.ciudad = ciudad
        this.estadoCivil = estadoCivil
        this.genero = genero
    }
    
    get ciudad(){
        return this.ciudad
    }
    set ciudad(ciudad){
        this.ciudad = ciudad
    }
    get estadoCivil(){
        return this.estadoCivil
    }
    set estadoCivil(estadoCivil){
        this.estadoCivil = estadoCivil
    }
    get genero(){
        return this.genero
    }
    set genero(genero){
        this.genero = genero
    }


}
