console.log("Merhaba kodlama.io")

//JS(Java Script) type safe(tip güvenlikli) değildir.
let dolarBugun = 9.30


let dolarDun = 9.20
dolarDun="9.20"

{
    let dolarDun= 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun =11

console.log(euroDun)

//array(dizi)
//camelCasing
//PascalCasing
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}

{   /* <ul>
    <li>Konut Kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
    </ul>
 
}

console.log(konutKredileri)