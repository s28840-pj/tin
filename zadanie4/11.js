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

function resetKoncowa(car) {
  car.cena_koncowa = car.cena_wyjsciowa;
}

function zwiekszWyjsciowa(car) {
  car.cena_wyjsciowa += 1000;
}

function obliczKoncowaWiek(car) {
  const age = CURRENT_YEAR - car.rok;
  car.cena_koncowa -= age * 1000;
  car.cena_koncowa = Math.max(car.cena_koncowa, 0);
}

function obliczKoncowaPrzebieg(car) {
  const dist = Math.floor(car.przebieg / 100_000);
  car.cena_koncowa -= dist * 10_000;
  car.cena_koncowa = Math.max(car.cena_koncowa, 0);
}

function ustawPrzebiegIRok(car, przebieg, rok) {
  car.przebieg = przebieg;
  car.rok = rok;
  resetKoncowa(car);
  obliczKoncowaWiek(car);
  obliczKoncowaPrzebieg(car);
}

const randomCar = () => {
  let car = {
    rok: 1980 + Math.floor(Math.random() * 40),
    przebieg: Math.floor(Math.random() * 1_000_000),
    cena_wyjsciowa: 5_000 + Math.floor(Math.random() * 200_000),
    cena_koncowa: 0,
  };
  resetKoncowa(car);
  return car;
};

function main() {
  let cars = Array.from({ length: 5 }, () => randomCar());
  const car = randomCar();
  console.log('Dane poczatkowe', car, cars);

  zwiekszWyjsciowa(car);
  resetKoncowa(car);
  console.log('Po zwiekszeniu ceny', car);

  obliczKoncowaWiek(car);
  console.log('Po uwzglednieniu wieku', car);

  obliczKoncowaPrzebieg(car);
  console.log('Po uwzglednieniu przebiegu', car);

  ustawPrzebiegIRok(car, 220_000, 2017);
  console.log('Po zmianie roku i przebiegu', car);

  dopiszAuto(cars, car);
  console.log('Po dopisaniu auta (albo i nie)', cars);

  zwiekszLata(cars);
  console.log('Po podwyzszeniu roku', cars);
}

main();
