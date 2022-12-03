// npm install -g typescript
// npm init --y (package.json içeriği)
// +tsconfig.json (ts buna göre çalışır)
// ts -> je'e tip desteği sağlar
// npm install @types/node  (nodejs tipleri)

import { resolve } from "path";

// @ts-ignore    (ALT SATIRDAKİ HATAYI GÖRME)
// a=asdasd





//--------------DEĞİŞKEN TİPLERİ--------------

// let myname: string | number = "Harry";    // string ya da number atanabilir sonradan
// let girlname: "buse" | "ceren" = "ceren"  // değer seçenekleriyle atama
// let age: Number = 30  // Number baş harfi büyük, class ifade ediyor.
// let a: 5 | 10 | 15 = 15  // değer seçenekleriyle atama
// let b: boolean = true;
// let c: undefined = undefined;
// let d: symbol = Symbol()
// const dizi = []   // any dizisi
// const numberdizi: number[] = []   // number dizisi
// const stringdizi = [] as string[]   // string dizisi
// const karmadizi: (number | string | boolean) [] = [ ]   // karışık dizi
// // tuple, tipleri belli, sabitt sayıda öge dizisi
// const myDizi: [string, string, number] = ["Harry", "Potter", 32]  //tuple


// myname= 15    // hata vermez
// myname = "Hasan"    // hata vermez

// function check() {
//     if (typeof myname === "string") {
//        // myname. tüm string metotşları gelir
//     }
//     if (typeof myname === "number") {
//         // myname. tüm number metotşları gelir
//     }
//     if (age instanceof Number) {
//         // class olarak tanımladık, instanceof olacak
//         // myname. tüm number metotşları gelir
//     }
// }

// const Person: {
//     isim: string,
//     yaş: number | string,    // tip seçenekleri
//     takım: "fener" | "city"   // değer seçenekleri
// } = {
//     isim: "Harry",
//     yaş: 32,
//     takım: "fener"
// }

// let h = "Hogwarts";
// let s = h as string;    // as - string olarak kabul et
// let r = <string> h;    // <string> - string olarak kabul et






//----------- FONKSİYONLAR ---------------

// // void : hiçbişey döndürmüyor
// function F() {
//     return 25
// }
// // const c = F() as string   // number return ettiği için yanlış !!!

// // Fonksiyonun ne döndüreceğini baştan yazalım
// function F2(): [number, string] {
//     return [25, "Harry"]
// }

// function LogPerson(parametreler: { isim: string; soyisim: string; yas: number }): Promise<number | string> {

//     return new Promise((resolve, reject) => {
//         resolve(25);
//     })
// }
// LogPerson({isim:"Harry", soyisim:"Potter", yas:32})

const yazmaca = () => {
    
}