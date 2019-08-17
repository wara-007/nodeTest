let plusFunction = (first, second) => {
  return  first + second;
}

let subtractFunction = (first, second) =>  first - second;

// one line Func
let addOne = (amout) => { return amout + 1; }

// export แบบ ojb
module.exports = {
  plus: plusFunction,
  subtract: subtractFunction,
  addOne: addOne
}