let robotY = 'j';
let robotK = 0;
let reslat;

switch(robotY){
      case "j": reslat = `Janub `; break;
      case "s": reslat = `Shimol `; break;
      case "q": reslat = `Sharq `; break;
      case "g": reslat = `G'arb `; break;
}
switch(robotK){
      case 0: console.log(`${reslat}- harakatni davom ettir.`); break;
      case 1: console.log(`${reslat}- chapga buril.`); break;
      case 2: console.log(`${reslat}- o'ngga buril.`); break;
}