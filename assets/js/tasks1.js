const objUser = {
  userName: 'name',
  userAge: 24,
  mylog: function () {
    console.log(`${this.userName} ${this.userAge}`)
  }
}
objUser.mylog();

//////////////////////////////////////////////////////////////

let product = {
  name: 'Kivi',
  price: 30,
  qty: 500,
  productRes: function(n) {
    let res = n * this.qty;
    return res;
  },
  productMin: function(k) {
    let min = this.qty - k;
    return min;
  }
}

const result = product.productRes(5);
console.log(result);

const result2 = product.productMin(10);
console.log(result2);

/////////////////////////////////////////////////////////////

function productPrice (sum) {
  let sumRes = sum + 10;
  return sumRes;
};

const resProdPrice = productPrice(product.price);
console.log(resProdPrice);

/////////////////////////////////////////////////////////////////

function Book(bookname, year, authors) {
  this.bookname = bookname;
  this.year = year;
  this.authors = authors;
}

let book1 = new Book('NY', '1989', 'Clarc Sellin')

console.log(book1);

///////////////////////////////////////////////////////////////////////////


