if (typeof window === 'undefined')
  require('./common.js');

const CURRENT_YEAR = 2023;

function dopiszAuto(cars, car) {
  if (car.cena_koncowa >= 10_000)
    cars.push(car);
}

function zwiekszLata(cars) {
  for (let car of cars)
    car.rok += 1;
}

const randomCar = () => {
  let car = {
    rok: 1980 + Math.floor(Math.random() * 40),
    przebieg: Math.floor(Math.random() * 1_000_000),
    cena_wyjsciowa: 5_000 + Math.floor(Math.random() * 200_000),
    cena_koncowa: 0,

    resetKoncowa() {
      this.cena_koncowa = this.cena_wyjsciowa;
    },

    zwiekszWyjsciowa() {
      this.cena_wyjsciowa += 1000;
    },

    obliczKoncowaWiek() {
      const age = CURRENT_YEAR - this.rok;
      this.cena_koncowa -= age * 1000;
      this.cena_koncowa = Math.max(this.cena_koncowa, 0);
    },

    obliczKoncowaPrzebieg() {
      const dist = Math.floor(this.przebieg / 100_000);
      this.cena_koncowa -= dist * 10_000;
      this.cena_koncowa = Math.max(this.cena_koncowa, 0);
    },

    ustawPrzebiegIRok(przebieg, rok) {
      this.przebieg = przebieg;
      this.rok = rok;
      this.resetKoncowa();
      this.obliczKoncowaWiek();
      this.obliczKoncowaPrzebieg();
    },
  };
  car.resetKoncowa();
  return car;
};

function main() {
  let cars = Array.from({ length: 5 }, () => randomCar());
  const car = randomCar();
  console.log('Dane poczatkowe', car, cars);

  car.zwiekszWyjsciowa();
  car.resetKoncowa();
  console.log('Po zwiekszeniu ceny', car);

  car.obliczKoncowaWiek();
  console.log('Po uwzglednieniu wieku', car);

  car.obliczKoncowaPrzebieg();
  console.log('Po uwzglednieniu przebiegu', car);

  car.ustawPrzebiegIRok(220_000, 2017);
  console.log('Po zmianie roku i przebiegu', car);

  dopiszAuto(cars, car);
  console.log('Po dopisaniu auta (albo i nie)', cars);

  zwiekszLata(cars);
  console.log('Po podwyzszeniu roku', cars);
}

main();
