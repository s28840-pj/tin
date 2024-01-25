function newElement(tag, f) {
  const res = document.createElement(tag);
  f(res);
  return res;
}

class Auto {
  constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
    this.rok = rok;
    this.przebieg = przebieg;
    this.cena_wyjsciowa = cena_wyjsciowa;
    this.cena_koncowa = cena_koncowa;
  }
}

const LEN = 10;
const auta = Array.from({ length: LEN }, () => new Auto(2000, 10, 10_000, 8_000));

function trFromAuto(auto) {
  return newElement(
    'tr',
    row => ['rok', 'przebieg', 'cena_wyjsciowa', 'cena_koncowa']
      .forEach(prop => row.appendChild(newElement('td', td => td.innerText = auto[prop])))
  );
}

document.getElementById('zad-3').appendChild(newElement(
  'table',
  table => {
    table.appendChild(newElement(
      'thead',
      head => head.appendChild(newElement(
        'tr',
        row => ['Rok', 'Przebieg', 'Cena wyjsciowa', 'Cena koncowa']
          .forEach(t => row.appendChild(newElement('th', th => th.innerText = t)))
      ))
    ));
    table.appendChild(newElement(
      'tbody',
      tbody => auta.forEach(auto => tbody.appendChild(trFromAuto(auto)))
    ));
  },
))
