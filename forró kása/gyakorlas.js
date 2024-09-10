import { kutyaLISTA } from "../adatok.js"
//import { kutyaKiir } from "./fuggveny.js"
import Kartya from "../view/Kartya.js"
import Kartyak from "../view/Kartyak.js"

// a kutyák adatait megjelenitenénk a tartalom divben külön divekben egymás mellet az egyes kutyák adatait (metódusok)
// hozzunk létre változókat

const cim="Minden, amit a kutyáról tudni kell"

let nev="Jenő"
nev="Béla"
console.log("név: ",nev)

// címet írjuk ki a headerbe a meglévő cím alá
// megfogjuk az adott html elemet és utána hozzáfűzzük vagy beleirunk.

const cimElem=$("header")
console.log(cimElem)
cimElem.append(`<p>${cim}</p>`) 
/*const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"nőstény"
}
kutya1.nev="Morzsa"
console.log(kutya1)
console.log(kutyaLISTA[0].nev)
const TARTALOM=$(".tartalom")
kutyaLISTA.forEach((elem)=>{
    new Kartya(elem, TARTALOM);
})*/
