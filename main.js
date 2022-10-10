var x = "Harry"; // x: string  // Tip eklemeye gerek yok  // TYPE INFERENCE
// :any dersek sonradan istediğimiz tipi atayabiliyoruz.   // Kullanmamak iyidir...
// Boolean sadece true-false olabilir...
var myStrArray; // String Array -- içindekiler string olmalı
var myNumArray; // String Array -- içindekiler number olmalı
var myArray; // String Array -- içindekiler herşey olabilir
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["black"] = 1] = "black";
    Color[Color["white"] = 2] = "white";
})(Color || (Color = {}));
; // Color.black veya color.0
var bankInfo; // Tupe tipi --- banka, meblağ
bankInfo = ["Garanti Bank", 3750];
// Sonradan bişeye atayacaksak typechecking açısından :any yerine :unknown daha iyi
// Type Assertion  --- typescript sen karışma modu..
var message;
message = "Hogwarts";
var newMessage = message.toLowerCase(); //   veya
var newnewMessage = message.toLowerCase();
