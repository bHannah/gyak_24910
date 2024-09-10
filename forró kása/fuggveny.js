export function kutyaKiir(kutya) {
    const TARTALOM=$(".tartalom")  
    //egyetlen egy kutya kiirása
    TARTALOM.append(`
    <div class="card col-lg-4 col-md-6">
    <div class="card-body">
        <h3 class="card-title">Név: ${kutya.nev}</h3>
        <p class="card-text">kor: ${kutya.kor}</p>
        <p class="card-text">nem: ${kutya.nem}</p>
        <button class="btn btn-success">Kiválaszt</button>
        </div></div>`)
}