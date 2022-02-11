"use strict";


/* 1) Создайте объект со структурой:
{
countryName: "Chech Republic",
population: 35000000,
areaSqKM: 345000, //площадь в квадратных км
helloPhrase: "Dobry Dzen",
nationalities: ['подставьте свои', 'варианты']
} */

const country = {
  countryName: "Chech Republic",
  population: 35000000,
  areaSqKM: 345000,
  helloPhrase: "Dobry Dzen",
  nationalities:['ukr', 'jp', 'kor']
}
 console.log(country);

//2) деструктуризуйте свойства countryName и helloPhrase, и за-алертите их;

const {helloPhrase, countryName } = country;
alert(helloPhrase, countryName);


//3) деструктуризуйте свойства population и areaSqKM,
//из них посчитайте плотность населения - популяция/площадь;


const {population, areaSqKM} = country;
console.log(population / areaSqKM);

//4) деструктуризуйте первую национальность из массива nationalities, и залогируйте её;

const {nationalities:[ukraine]} = country;

console.log(ukraine);