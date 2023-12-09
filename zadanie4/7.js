if (typeof window === 'undefined')
  require('./common.js');

async function prostokat() {
  display('Podaj dlugosci scian');
  const [a, b] = await getNumbers(2);

  return display(`Pole = ${a * b}`);
}

async function trapez() {
  display('Podaj wysokosc i dlugosci podstaw');
  const [h, a, b] = await getNumbers(3);

  return display(`Pole = ${(a + b) / 2 * h}`);
}

async function rownoleglobok() {
  display('Podaj wysokosc i podstawe');
  const [h, a] = await getNumbers(2);

  return display(`Pole = ${a * h}`);
}

async function trojkat() {
  display('Podaj wysokosc i podstawe');
  const [h, a] = await getNumbers(2);

  return display(`Pole = ${a / 2 * h}`);
}

async function main() {
  for (;;) {
    display(`Wybierz figure
  1 - prostokat
  2 - trapez
  3 - rownoleglobok
  4 - trojkat`);
    const [c] = await getNumbers(1);

    switch (c) {
      case 1:
        return await prostokat();
      case 2:
        return await trapez();
      case 3:
        return await rownoleglobok();
      case 4:
        return await trojkat();
      default:
        display('Niepoprawny wybor');
    }
  }
}

main();
