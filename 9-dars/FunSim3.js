function Mean(number1, number2){
      let arf = (number1 + number2) / 2;
      let geo = Math.sqrt(number1 * number2);
      console.log(`Arifmetika: ${arf}, Geomemetrka: ${geo}`);
}

let a = 8;
let b = 10;
let c = 15;
let d = 12;

let ab = Mean(a,b);
let ac = Mean(a,c);
let ad = Mean(a,d);