if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  display('Podaj wysokosc choinki');
  const [h] = await getNumbers(1);

  for (let i = 1; i <= h; i += 1)
    display(Array.from({ length: i }, () => '*').join(''));
}

main();
