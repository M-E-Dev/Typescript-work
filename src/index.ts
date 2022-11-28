// npm install -g typescript
// npm init --y (package.json içeriği)
// +tsconfig.json (ts buna göre çalışır)
// ts -> je'e tip desteği sağlar
// npm install @types/node  (nodejs tipleri)

// @ts-ignore    (ALT SATIRDAKİ HATAYI GÖRME)
// a=asdasd


let myname: string | number = "Harry";    // string ya da number atanabilir sonradan
let girlname: "buse" | "ceren" = "ceren"  // değer seçenekleriyle atama
let age: Number = 30  // Number baş harfi büyük, class ifade ediyor.
let a: 5 | 10 | 15 = 15  // değer seçenekleriyle atama
let b: boolean = true;
let c: undefined = undefined;
let d: symbol = Symbol()
const dizi = []   // any dizisi
const numberdizi: number[] = []   // number dizisi
const stringdizi = [] as string[]   // string dizisi
const karmadizi: (number | string | boolean) [] = [ ]   // karışık dizi
// tuple, tipleri belli, sabitt sayıda öge dizisi
const myDizi: [string, string, number] = ["Harry", "Potter", 32]  //tuple


myname= 15    // hata vermez
myname = "Hasan"    // hata vermez

function check() {
    if (typeof myname === "string") {
       // myname. tüm string metotşları gelir
    }
    if (typeof myname === "number") {
        // myname. tüm number metotşları gelir
    }
    if (age instanceof Number) {
        // class olarak tanımladık, instanceof olacak
        // myname. tüm number metotşları gelir
    }
}

const Person: {
    isim: string,
    yaş: number | string,    // tip seçenekleri
    takım: "fener" | "city"   // değer seçenekleri
} = {
    isim: "Harry",
    yaş: 32,
    takım: "fener"
}

let h = "Hogwarts";
let s = h as string;    // as - string olarak kabul et
let r = <string> h;    // <string> - string olarak kabul et