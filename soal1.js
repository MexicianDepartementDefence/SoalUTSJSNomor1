class jenishewan {
    constructor(hewan ,kaki, pemakan, jenis){
this.hewan = hewan;
this.kaki = kaki;
this.pemakan = pemakan;
this.jenis = jenis;

}
mamalia(){    console.log (`Hewan ${this.hewan} Mempunyai ${this.kaki} Kaki Dan Ia Pemakan ${this.pemakan} Dan Ia Berjenis ${this.jenis}`)
}


amfibi(){
    console.log (`Hewan ${this.hewan} Mempunyai ${this.kaki} Kaki Dan Ia Pemakan ${this.pemakan} Dan Ia Berjenis ${this.jenis}`)
}
burung(){
    console.log (`Hewan ${this.hewan} Mempunyai ${this.kaki} Kaki Dan Ia Pemakan ${this.pemakan} Dan Ia Berjenis ${this.jenis}`)

}
reptil(){
    console.log (`Hewan ${this.hewan} Mempunyai ${this.kaki} Kaki Dan Ia Pemakan ${this.pemakan} Dan Ia Berjenis ${this.jenis}`)

}



}

let ayam = new jenishewan("ayam", 2, "omnivora", "burung");
let kucing = new jenishewan("Kucing", 4, "Karnivora", "Mamalia");
let katak = new jenishewan("Katak", 2, "insektivora", "amfibi");
let monyet = new jenishewan("Monyet", 2, "Omnivora", "Mamalia");

console.table(katak)
katak.amfibi()
console.table(ayam)
ayam.burung()
console.table(monyet)
monyet.mamalia()
console.table(kucing)
kucing.mamalia()



