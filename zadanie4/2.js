if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  display('Wypisze wszystkie liczby z przedzialu [a, b], ktore sa podzielne przez c');
  const [a, b, c] = await getNumbers(3);

  for (let i = a; i <= b; i += 1)
    if (i % c == 0)
      display(i);
}

main();
