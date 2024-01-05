const a = 7;
const b = 8;

const isResalt = (a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1);

console.log(`Rostlikni tekshiring ${isResalt}`);