let k = 15;
let resalt = 3;

switch(resalt){
      case 1: console.log(`${k} kg teng`); break;
      case 2: console.log(`${(k / 1000) / 1000} kg teng`); break;
      case 3: console.log(`${k / 1000} gramm teng`); break;
      case 4: console.log(`${k / 1000 } tonna teng`); break;
      case 5: console.log(`${k / 10} sentr teng`); break;

      default:
            console.log(`Bunday og'irlik qiymati yuq!`); break;
}