import Kartya from "./Kartya.js"

export default class Kartyak{
    #lista=[]
    #TARTALOM
    constructor(lista, TARTALOM){
        this.#lista=lista
        this.#TARTALOM=TARTALOM
        this.#TARTALOM.empty()
        this.kutyakKiir()
    }
    kutyakKiir(){
        this.#lista.forEach((elem)=>{
            new Kartya(elem, this.#TARTALOM);
        })
    }
}