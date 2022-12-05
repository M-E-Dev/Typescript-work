// npm install -g typescript
// npm init --y (package.json içeriği)
// +tsconfig.json (ts buna göre çalışır)
// ts -> je'e tip desteği sağlar
// npm install @types/node  (nodejs tipleri)

import { type } from "os";
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

// const yazmaca = (isim: string, tekrar: number): void => {
//     for (let i = 0; i < tekrar; i++) {
//         console.log(isim);
        
//     }
// }
// yazmaca("Harry", 3)



//------------------------ Tip İsimlendirme / Type Aliasing ------------------------------------

// type Person = {
    //     isim: string;
    //     soyad?: string;
    //     yas?: string; // ? opsiyonel demektir
    //     durum: string;
    // }
    // const obj: Person = {
//     isim: "Harry",
//     durum: "bekar"
// }
// const objDizi: Person[] = [{    // Person[] yaparak array yaptık
//     isim: "Harry",
//     durum: "bekar"
// }]

// //------------

// type Colors = "red" | "green" | "blue";
// type CustomColors = "black" | "gray" | "darkgrey";

// const myColors: Colors = "blue";
// const colorArr: (Colors | CustomColors)[] = ["blue", "green", "red", "black"]  // iki faklı type

// // veya tipleri birleştirirz
// type AllColors = Colors | CustomColors;
// const colorArr2: AllColors[] = ["black","green"]

// //------------
// // Type objeleri birleştirme... Tüm içeriği barındırmak zorunda yeni obje
// type Man = {
    //     ad: string;
    //     yas: number
    // }
    // type Wolf = {
//     tur: string;
//     yas: number
// }
// type WolfMan = Man & Wolf;

// const WolfMan1: WolfMan = {
    //     ad: "Harry",
//     yas: 32,
//     tur: "Kurt"
// }




// //------------------------ Modüller / Modules ------------------------------------

// import type {student} from "./person"




// //------------------------ Nesne Tiplendirme / Object Typing ------------------------------------

// type MyObj = {
    //     isim: string;
    //     yas: number;
    //     [key: string]: any   // Kullanıcı isim+yas dısında ekleme yapabilsin
    // }
    // const myObj: MyObj = {
        //     isim: "Harry",
        //     yas: 32,
        //     takım: "fener",
        //     boy: 185
        // }
        
        // const myObject: Record<number, {evli:boolean}> = {    //  Record<key, value>
        //     15: {
//         evli: false
//     }
// }




// // //------------------------ Interfaces ------------------------------------

// interface MyArray {
//     [index: number]: string | number;
// }

// const newArray: MyArray =  ["Harry", 32]


// // //------------------------ Interface Function ---------------------------
// interface IFunction {
    //     (isim: string | boolean, tekrar: number): string | boolean;
    // }
    
    // const myFunc: IFunction = (isim, tekrar) => {
//     return false
// }

// // interface extending
// interface MongoResponse {
//     _id: string;
//     createdAt: string;
//     updatedAt: Date
// }
// interface ProductResponse extends MongoResponse {       // interface extend ile genişlettik
//     name: string;
//     page: number
// }
// const getProduct = (): ProductResponse => {
    //     return{
//         _id: "51",
//         createdAt: "19.11.1990",
//         updatedAt: new Date(),
//         name: "Harry",
//         page: 250
//     }
// }

// interface IStudent{
//     isim: string;
//     sinif: number;
//     getStudentInformation:()=>{
//             isim: IStudent["isim"],
//             sinif: IStudent["sinif"],
//         }
//     }
//     const obj: IStudent = {
//         isim: "Harry",
//         sinif: 12,
//         getStudentInformation() {
//             return{
//                 isim: this.isim,
//                 sinif: this.sinif
//             }
//         },
//     }
    




// //------------------------ Yardımcı Tipler / Utility Types ---------------------------

// interface Person {
//     name: string;
//     surname: string;
//     age: number;
// }

// const Hasan: Omit<Person, "age"> = {      // Omit ile interfaceden istemediğimiz elemanı çıkarttık
//     name: "Hasan",
//     surname: "Güçlü"
// }
// const Ozer: Pick<Person, "age"> = {      // Pick ile interfaceden sadece istediğimiz elemanı alıyoruz
//     age: 40
// }

// type Eroglu = Exclude<string | number, number>      // Omit'in tip bazlı hali.   Bir tipi çıkartıyoruz



// const yazdir = (info: {city: string; born: string}) => {

// }

// type Info = Parameters<typeof yazdir>     // type bilgisi olmayan bir fonksiyon veya calssın tipini alıp atadık.


// interface Person {
//     name: string;
//     surname?: string;
// }
// const Onur: Partial<Person> = {       // zorunlu olanı opsiyonel yaptı

// }

// const Ozer: Required<Person> = {      // opsiyonelleri zorunlu yaptı
//     name: "Özer",
//     surname: "Akgül"
// }

// Ozer.name = "Hasan"       // İçeriği değiştirebiliyoruz. Bunu önlemek için:

// const Hasan: Readonly<Person> = {      // içeriği değiştirmeyi yasakladık
//     name: "Hasan",
//     surname: "Akgül"
// }


// const returnNum = () => {
//     return 60
// }
// const myVal: ReturnType<typeof returnNum> = 2184     //  Bir fonksiyonun ne tip döndürdüğünü alıp değerimize tip olarak uyguladık





// //------------------------ ENUM ---------------------------


// // Normal yazılışı
// const Notification = {
//     Success:"Success",
//     Error:"Error",
//     Warning:"Warning",
//     Information:"Information"
// };
// const sendNotification(notificationType: keyof typeof Notification) {
//     const selectedNotification = Notification[notificationType];
//     switch (selectedNotification) {
//         case Notification.Success:
//             console.log("Başarılı");
//             break;
//         case Notification.Error:
//             console.log("Hata");
//             break;
//     }
// }
// sendNotification("Error")

// // Enum yazılışı
// enum Notification {      // readonly + kendiliğinden numaralıdır 0,1,2,3
//     Success,
//     Error,
//     Warning,
//     Information,
// };
// const sendNotification = (notificationType: Notification) => {
//     switch (notificationType) {
//         case Notification.Success:
//             console.log("Başarılı");
//             break;
//         case Notification.Error:
//             console.log("Hata");
//             break;
//     }
// }
// sendNotification(Notification.Error)




//---------------------------------- TİP PARAMETRELERİ --------------------------------------
// type Todo = {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }
// //Todo tipi
// const response = await makeFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1");
// response.id
// //Todolardan oluşan array tipi
// const response = await makeFetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");
// response[0].id

// const useTimeStamp = <T extends object>(obj: T) => {
//     return {
//         ...obj,
//         createdTime: Date.now()
//     }
// }





//---------------------------------- as const, Tip Parantezleri ve Tuple --------------------------------------

// let name = "Harry"                // otomatik string yaptı
// let name2 = "Harry" as string     // string tipi
// let name3: string = "Harry"       // string tipi 
// let name4 = <string>"Harry"       // string tipi

// interface Student {
//     name: string;
//     class: number;
// }

// const myObject: Student = {
//     name: "Harry",
//     class: 5
// }
// const myObject2 = <Student>{
//     name: "Harry",
//     class: 5
// }

// 