// disadvantage

let a = 10;
let b = 0;

// node js Asynchronus progaming language
// this is promise it will wait until get the new result
let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

waitingData.then((data) => console.log(a + data));

console.log(a + b); // 10;
