const User = require('./models/user');
const login = require('./services/authen');
const calculator = require('./services/calculator');
const subtract = require('./services/calculator').subtract(3,1);
const DatabaseConnect = require('./DatabaseConnect');

let db = new DatabaseConnect();
db.connect;
db.disconnect;


console.log(subtract);

let result = calculator.plus(1,2);
console.log(result);

let addResult = calculator.addOne(10);
console.log(addResult);

// let username = 'aum';
// console.log(username);
// console.log(User);
// console.log(login);


