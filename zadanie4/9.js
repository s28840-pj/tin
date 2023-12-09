if (typeof window === 'undefined')
  require('./common.js');

async function main() {
  display('Podaj wysokosc trojkata');
  const [h] = await getNumbers(1);

  let prev = [1];
  for (let i = 0; i < h; i += 1) {
    let len = i + 2;
    display(prev.join(' '));
    prev = Array.from({ length: len }, (_, j) => (prev[j - 1] ?? 0) + (prev[j] ?? 0));
  }
}

main();
