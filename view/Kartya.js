export default class Kartya{
    //adattagok
    #obj={}
    #szuloElem;
    //konstruktor-
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kutyaKiir()
        //gombelem a kartya saját adattagja lesz
        this.gombElem=$(".kivalaszt:last")
        console.log(this.gombElem)
        this.esemenykezelo()
    }
    //tagfüggvény
    kutyaKiir() {
        //egyetlen egy kutya kiirása
        this.#szuloElem.append(`
        <div class="card col-lg-4 col-md-6">
        <div class="card-body">
            <h3 class="card-title">Név: ${this.#obj.nev}</h3>
            <p class="card-text">kor: ${this.#obj.kor}</p>
            <p class="card-text">nem: ${this.#obj.nem}</p>
            <button class="btn btn-success kivalaszt">Kiválaszt</button>
            </div></div>`)
    }
    //gombesemények kezelése
    esemenykezelo(){
        this.gombElem.on("click",()=>{
            console.log(this)
            const e=new CustomEvent("kivalaszt",{
                detail:this.#obj})
                window.dispatchEvent(e)
        })
    }
}