let a = 7.9;
let b = 7.1;
let c;

c = a;
a = b;
b = c;

let resalt;
if(a > b){
      resalt = a;
}else{
      resalt = b;
}

console.log(`Haqiqiy sonlar a = ${a} va b ${b} va reslat ${resalt}`);
