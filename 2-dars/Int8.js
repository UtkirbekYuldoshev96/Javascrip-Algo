let n = 45;
let un = Math.floor(n / 10);
let bir = n % 10;
 
console.log(`un ${un} bir ${bir}`);

let c = un;
un = bir;
bir = c;
console.log(`un ${un} bir ${bir}`);