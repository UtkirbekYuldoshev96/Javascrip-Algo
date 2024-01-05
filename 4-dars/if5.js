let a = -4;
let b = -1;
let c = 2;
let sumMus = 0;
let sumMan = 0;

if(a > 0){ sumMus++;}
if(b > 0){ sumMus++;}
if(c > 0){ sumMus++;}

if(a < 0){ sumMan++;}
if(b < 0){ sumMan++;}
if(c < 0){ sumMan++;}

console.log(`Summa plus ${sumMus} va minus ${sumMan}`);