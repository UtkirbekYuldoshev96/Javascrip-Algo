let n = 7;
let summa = 0;
for(let i = 1; i <= n; i++){
      summa += i + (i / n);
      console.log(`i = ${summa}`);
}
console.log(`summa = ${summa}`);