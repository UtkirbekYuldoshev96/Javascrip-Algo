const a = 100;
const b = 45;
const c = 65;

const isTekshirOwe = (a <= b) && (b <= c);
const isTekshir = (a <= b <= c);
console.log(`Rostlikni tekshiring ${isTekshir} \n`);
console.log(`Rostlikni tekshiring ${isTekshirOwe}`);