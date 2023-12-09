if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  display('Podaj dlugosc ciagu Fibonacciego');
  const [len] = await getNumbers(1);

  function inner(len) {
    let a = 0;
    let b = 1;

    while (len-- > 0) {
      display(a);
      const n = a + b;
      a = b;
      b = n;
    }
  }

  inner(len, 0, 1);
}

main();
