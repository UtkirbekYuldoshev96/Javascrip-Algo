// Natural sonning raqamlari soni va raqamlar yig'indisini hisoblovchi DigitCountSum nomli funksiya hosil qiling. Bu funksiya orqali a, b, c sonlarining raqamlari soni va yig'indisini hisblovchi programma tuzilsin.

// const DigitCountSum = (a, b, c) =>{
//       const summa = a + b + c;
//       const kupSumma = a * b * c;

//       return {
//             summa: summa,
//             kupSumma: kupSumma,
//       }
// }

// const reslat = DigitCountSum(7,9,12);
// console.log(reslat);


function DigitCountSum(number) {
      let digitCount = 0;
      let digitSum = 0;
      let num = number;
    
      while (num > 0) {
        const digit = num % 10;
        digitSum += digit;
        digitCount++;
        num = Math.floor(num / 10);
      }
    
      return {
        count: digitCount,
        sum: digitSum
      };
    }
    
    const a = 5;
    const b = 9;
    const c = 2;

    const resultA = DigitCountSum(a);
    const resultB = DigitCountSum(b);
    const resultC = DigitCountSum(c);
    
    console.log("a: Rakam Soni =", resultA.count, "Rakamlar Toplam =", resultA.sum);
    console.log("b: Rakam Soni =", resultB.count, "Rakamlar Toplam =", resultB.sum);
    console.log("c: Rakam Soni =", resultC.count, "Rakamlar Toplam =", resultC.sum);