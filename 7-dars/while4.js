let n = 3;
let k = 27;

while(n > k){
      if(n % 3 !== 0){
            console.log(`${n} darajasi emas`);
      }
      n /= 3;
}
console.log(`${n} darajasi`);