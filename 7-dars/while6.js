let resalt = 1;
let n = 7;

while(n >= 1){
      resalt *= n; // 8 * 6 = 48 * 4 = 192 * 2 = 384
      n -= 2; // 8, 6, 4 , 2
      // resalt *= n; // 8 * 6 = 48 * 4 = 192 * 2 = 384
}

console.log(resalt);