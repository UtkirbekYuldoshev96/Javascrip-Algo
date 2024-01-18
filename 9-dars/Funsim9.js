function AddLeftDigit(son, raqam){
      raqam = raqam + son * 10;
      return raqam;
}

const son = 14;
const raqam = 5;

console.log(`Natija = ${AddLeftDigit(son, raqam)}`);
// https://t.me/webdev011_1 