// While. n natural soni berilgan (n > 0). Kvadrati n dan katta bo'lmagan eng katta butun k sonini (k^2 <= n) aniqlovchi programma tuzilsin. Ildizdan chiqaruvchi funksiyadan foydalanmang.

let k = 1;
let n = 20;

while(k*k <= n){
      k++;
}

console.log(`Eng katta k butun soni ${k}`);