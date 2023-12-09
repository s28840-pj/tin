if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  const numbers = await getNumbers(3);
  const [a, b, c] = numbers.sort();

  if (a * a + b * b == c * c)
    display('Trojka pitagorejska!');
  else
    display('Nie jest to trojka pitagorejska');
}

main();
