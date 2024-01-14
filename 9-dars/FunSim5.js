function RectPS(x1,x2,y1,y2){
      const eni = Math.abs(x2 - x1);
      const buyi = Math.abs(y2 - y1);

      const yuzasi = eni * buyi;
      const premetr = 2 * (eni + buyi);

      return {
            are: yuzasi,
            pre: premetr,
      }
}

const resalt = RectPS(4, 7, 3, 5);
console.log(`To'g'ri to'rtburchak yuzasi ${resalt.are}`);
console.log(`To'g'ri to'rtburchak premetr ${resalt.pre}`);