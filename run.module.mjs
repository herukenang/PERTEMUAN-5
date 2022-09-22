import message from "./general.mjs";
import hitung from "./hitung1.mjs";
import jumlah from "./hitung3.mjs";
import hitung2 from "./hitung2.mjs";
import awesomeNewmodule from "./general2.mjs";
import segitiga from "./segitiga.mjs";

//contoh 1
console.log(message());

//contoh 2
var a = 1;
var b = 4;

console.log(hitung(a, b));

//contoh 3
const h = hitung2()
const h2 = h.hitung3()
console.log(h2.nama1, h2.nama2);
console.log(h.kelas, h.nama);

//contoh 4
var n = 5, m = 6;
 let s = { "angka": n, "angka2": m };
 const ss = jumlah(s)
 console.log(ss);
 awesomeNewmodule.helloMars();
 awesomeNewmodule.goodbye();
 segitiga();




