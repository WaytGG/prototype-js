const cat1 = {
  name: 'Vasya',
  sayHi: function (name) {
    console.log('Привет ' + this.name);
  }
}
cat1.sayHi()

//////////////////////////////////////////////////

const cat2 = {
  name: 'Oleg',
  sayHi: function (name) {
    console.log(cat1.name + ' ' + this.name);
  }
}
cat2.sayHi();

///////////////////////////////////////////////////

function funcCat(cat) {
  cat1.name = cat;
}

const resultCat = funcCat('Anna');
console.log(cat1);