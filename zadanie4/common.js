global.BROWSER = typeof window !== 'undefined';

global.display = BROWSER ? alert : console.log;

global.ask = question => {
  if (BROWSER) {
    return Promise.resolve(prompt(question));
  } else {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise(resolve => readline.question(question, answer => {
      readline.close();
      resolve(answer);
    }));
  }
}

global.getNumbers = async (len) => {
  for (;;) {
    if (len <= 0)
      return [];
    const prompt = len > 1 ? `Podaj ${len} liczby oddzielone srednikami: ` : `Podaj liczbe: `;
    const vals = await ask(prompt);
    const parsed = vals.split(';').map(x => parseFloat(x.trim()));

    if (parsed.length == len && parsed.every(x => !Number.isNaN(x)))
      return parsed;

    display('Niepoprawne dane. Sprobuj jeszcze raz.');
  }
}
