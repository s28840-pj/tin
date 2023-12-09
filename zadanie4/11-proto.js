if (typeof window === 'undefined')
  require('./common.js');

const CURRENT_YEAR = 2023;

function Car(rok, przebieg, cena_wyjsciowa) {
  this.rok = rok;
  this.przebieg = przebieg;
  this.cena_wyjsciowa = cena_wyjsciowa;
  this.cena_koncowa = 0; 

  this.resetKoncowa();
}

function dopiszAuto(cars, car) {
  if (car.cena_koncowa >= 10_000)
    cars.push(car);
}

function zwiekszLata(cars) {
  for (let car of cars)
    car.rok += 1;
}

Car.prototype.resetKoncowa = function() {
  this.cena_koncowa = this.cena_wyjsciowa;
}

Car.prototype.zwiekszWyjsciowa = function() {
  this.cena_wyjsciowa += 1000;
}

Car.prototype.obliczKoncowaWiek = function() {
  const age = CURRENT_YEAR - this.rok;
  this.cena_koncowa -= age * 1000;
  this.cena_koncowa = Math.max(this.cena_koncowa, 0);
}

Car.prototype.obliczKoncowaPrzebieg = function() {
  const dist = Math.floor(this.przebieg / 100_000);
  this.cena_koncowa -= dist * 10_000;
  this.cena_koncowa = Math.max(this.cena_koncowa, 0);
}

Car.prototype.ustawPrzebiegIRok = function(przebieg, rok) {
  this.przebieg = przebieg;
  this.rok = rok;
  this.resetKoncowa();
  this.obliczKoncowaWiek();
  this.obliczKoncowaPrzebieg();
}

const randomCar = () => new Car(
  1980 + Math.floor(Math.random() * 40),
  Math.floor(Math.random() * 1_000_000),
  5_000 + Math.floor(Math.random() * 200_000)
);

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
