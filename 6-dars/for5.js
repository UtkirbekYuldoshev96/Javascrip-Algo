let k = 1;  // kg konfet narxi 
let narx = 14050;

for(let i = 0.1; i <= k; i+= 0.1){
      console.log(`Konfet summa ${i} * ${Math.floor(narx)} = ${Math.floor(i * narx)} =  ${i.toFixed(1)}`);
}