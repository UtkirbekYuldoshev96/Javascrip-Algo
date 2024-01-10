let a = 1;
let b = 9;

let summa = 0;

for(let i = a; i <= b; i++){
      summa += (i * i);
      console.log(`${i * i} - ${summa}`)
};

console.log(`Kvadratning summasi ${summa}`);