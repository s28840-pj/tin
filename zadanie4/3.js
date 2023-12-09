if (typeof window === 'undefined')
  require('./common.js');

function leftPad(num, len) {
  const s = num.toString();
  return ' '.repeat(len - s.length) + s;
}

async function main() {
  display('Tabliczka mnozenia');
  const [a] = await getNumbers(1);
  const numberLength = (a * a).toString().length;

  for (let i = 0; i < a; i += 1) {
    const row = Array.from({ length: a }, (_, j) => leftPad((i + 1) * (j + 1), numberLength));
    display(row.join(' '));
  }
}

main();
