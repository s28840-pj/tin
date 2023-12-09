if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  display('Podaj wysokosc choinki ~nocnej~');
  const [h] = await getNumbers(1);

  const max = 2 * (h - 1) + 1;
  const full = Array.from({ length: max }, () => '*').join('');
  display(full);
  for (let i = 0; i < h - 1; i += 1) {
    let center = Array.from({ length: 2 * i + 1 }, () => ' ').join('');
    let side = Array.from({ length: (max - center.length) / 2 }, () => '*').join('');
    display(side + center + side);
  }
  display(full);
}

main();
