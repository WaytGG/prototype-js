//Оператор Spread:
// funcCall(...array)
// [ 1, 2, 3, ...pasteArray, 5, 6 ]
// { field1Name: 'value1', field2Name: 'value2', ...mergeWithObj }

// Массивы
//1) создать массив с произвольными данными (* случайными числами),

const arrRandom = [12, 2, 23, 4, 6];

console.log(arrRandom);

//2) с помощью оператора spread клонируйте массив в новый

arrCopy = [...arrRandom];
console.log(arrCopy);

/*3)используя оператор spread создайте новый массив из букв строки "тест строки как массива"
(разбейте строку как массив)*/

const str = [..."тест строки как массива"];

console.log(str);

//Обьекты
/* 4) создайте объект со свойствами:
id, firstname, lastname, age, */

const userObj = {
  id: "23",
  firstname: "Vasya",
  age: "23",
};

/* 5) создайте второй объект со свойствами
tel, email */

const userObjPhone = {
  tel: "09333333",
  email: "email@gmail.com",
};

//6) с помощью оператора spread объедините оба объекта в новый и сохраните в переменную

const userResultObj = { ...userObj, ...userObjPhone };

console.log(userResultObj);

//Оператор Rest:
// function (...myRestName) {}
// function (firstParam, ...myRestName) {}
// (...myRestName) => {}
// (firstParam, ...myRestName) => {}

/* 1) создайте функцию которая принимает неограниченное количество аргументов с помощью оператора rest параметров
и логирует их массив в консоль*/

function restArg(...unlimitedArg) {
  console.log(unlimitedArg);
}

restArg("test");

/* 2) создайте функцию чтобы она принимала любое кол-во параметров:
если в какой либо ячейке есть число то квадрат этого числа
иначе если в какой либо ячейке есть строка то возвращала эту строку не изменяя */

/* function paramPow(...param) {
  const arr = [];

  param.forEach(function (value) {
    if (typeof value === 'number') {
      const resultPow = Math.pow(value, 2); 
      return arr.push(resultPow);
    }
    if (typeof value === 'string') {
      return arr.push(value);
    }
  });
  return arr;
} */

/* const resultPar = paramPow(4, 'asd');
console.log(resultPar); */



// 3) создайте функцию которая находит минимальное число из всех полученных аргументов

/* function minNum (...arg) {
  const sumMin = Math.min(...arg);
  return sumMin;
};

const minFunc = minNum(23, 9, 1, 22);

console.log(minFunc); */
