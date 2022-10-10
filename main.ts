let x = "Harry"   // x: string  // Tip eklemeye gerek yok  // TYPE INFERENCE
// :any dersek sonradan istediğimiz tipi atayabiliyoruz.   // Kullanmamak iyidir...
// Boolean sadece true-false olabilir...
let myStrArray: string[]   // String Array -- içindekiler string olmalı
let myNumArray: number[]   // String Array -- içindekiler number olmalı
let myArray: any[]   // String Array -- içindekiler herşey olabilir
enum Color {red, black, white};  // Color.black veya color.0
let bankInfo: [string, number]   // Tupe tipi --- banka, meblağ
bankInfo = ["Garanti Bank", 3750]
// Sonradan bişeye atayacaksak typechecking açısından :any yerine :unknown daha iyi

// Type Assertion  --- typescript sen karışma modu..
let message;
message = "Hogwarts"
const newMessage = (<string>message).toLowerCase()  //   veya
const newnewMessage = (message as string).toLowerCase()
console.log(newMessage)