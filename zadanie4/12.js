if (typeof window === 'undefined')
  require('./common.js');

class Ocena {
  #przedmiot;
  #wartosc;

  constructor(przedmiot, wartosc) {
    this.#przedmiot = przedmiot;
    this.#wartosc = wartosc;
  }

  get wartosc() { return this.#wartosc; }

  get przedmiot() { return this.#przedmiot; }
}

class Student {
  #oceny = [];

  get srednia() {
    return this.#oceny.reduce((acc, ocena) => acc + ocena.wartosc, 0)
      / Math.max(1, this.#oceny.length);
  }

  set oceny(x) {
    if (Array.isArray(x) && x.every(o => o instanceof Ocena))
      this.#oceny = this.#oceny.concat(x);
    else if (x instanceof Ocena)
      this.#oceny.push(x);
    else
      throw new Error('Nieprawidlowy typ');
  }

  get oceny() {
    return this.#oceny
      .map(ocena => `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}.`)
      .join('\n');
  }
}

function main() {
  let s = new Student();
  display('---\nPrzed dodaniem ocen');
  display(`Srednia: ${s.srednia}`);
  display(s.oceny);

  s.oceny = new Ocena('Polski', 2);
  s.oceny = new Ocena('Matematyka', 3);
  s.oceny = new Ocena('Biologia', 1);

  display('---\nPo dodaniu ocen');
  display(`Srednia: ${s.srednia}`);
  display(s.oceny);

  s.oceny = [
    new Ocena('Polski', 4),
    new Ocena('Matematyka', 5),
    new Ocena('Biologia', 6),
  ];

  display('---\nPo dodaniu wiecej ocen');
  display(`Srednia: ${s.srednia}`);
  display(s.oceny);
}

main();
