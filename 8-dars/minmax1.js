let n = 7; // natural son
let min, max;
let a = 5; // sonlar

min = a;
max = a;

for(let i = 0; i <= n; i++){
      a = 9;
      if(a > max){ max = a;}
      if(a < min){min = a}
}

console.log(`Katta son ${max} Kichik son ${min}`);
