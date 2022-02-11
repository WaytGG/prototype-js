/* 1) создать обьект cat1
в свойство name записать имя
также добавить метод sayHi который приветствует по имени
 */

const cat1 = {
  name: 'Vasya',
  sayHi: function (name) {
    console.log('Привет ' + this.name);
  }
}
cat1.sayHi()



/* 2) создать второй обьект cat2 с той же конструкцией и другим именем
у cat2 значение свойства sayHi на заменить функцию
которая логирует cat1.name и this.name */

const cat2 = {
  name: 'Oleg',
  sayHi: function (name) {
    console.log(cat1.name + ' ' + this.name);
  }
}
cat2.sayHi();


/* 3) создать функцию которая принимает обьект cat в параметры и меняет свойство name на произвольное */

function funcCat(cat) {
  cat1.name = cat;
  return cat1;
}

const resultCat = funcCat('Anna');
console.log(cat1.name);



/* 4) создать стрелочную функцию
которая логирует this.name
и записать ее ссылку в свойство cat2.sayHi
вызвать cat2.sayHi - почему имя не логируется? */

const user = {
  name: 'Asher',
  sayHi() {
    const arrName = () =>(this.name);
    cat2.sayHi = user.name;
  }
};

user.sayHi();

console.log(cat2.sayHi);



/* 5) функция конструктор Article которая имеет свойства названия, и массив авторов, а также метод для добавления новых авторов
this.name
this.authors = []
this.addAuthor = function*/

function Article(name, authors) {
  this.name = name;
  this.authors = authors;
  this.addAuthor = function() {}; //переделать. надо дабавлять в массив авторов
}

const testConst = new Article('Vanya', 'Автор');

console.log(testConst);
testConst.addAuthor = 'AddTestAuthor'; 





/* 6) вызвать функцию
cat1.sayHi.call(cat2)
почему имя в консоли не взято от cat1 а принадлежит cat2 */

cat1.sayHi.call(cat2); //В () передаем аргумент

// MDN - Function.prototype.call() 