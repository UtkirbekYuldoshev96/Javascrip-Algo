function AddRightDigit(son, raqam){
      son = son * 10 + raqam;
      return son;
}

const son = 15;
const raqam = 8;
console.log(`Reslat = ${AddRightDigit(son, raqam)}`);