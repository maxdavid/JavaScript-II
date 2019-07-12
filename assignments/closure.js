// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function handsomeJim() {
  function sayHello() {
    console.log(`Greetings... my name is ${firstName} ${lastName}.`);
  }
  let firstName = 'Handsome';
  let lastName = 'Jim';
  return sayHello;
}
let ourJim = handsomeJim();
ourJim();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = (startingIndex) => {
  let cnt = startingIndex;
  function inc() {
    cnt++;
    return cnt;
  }
  return inc;
};
const newCounter = counter(0);
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (startingIndex) => {
  let cnt = startingIndex;
  function inc() {
    cnt++;
    return cnt;
  }
  function dec() {
    cnt--;
    return cnt;
  }
  return {
    inc: inc,
    dec: dec
  };
};

const newCounterFactory = counterFactory(0);
console.log(newCounterFactory.inc());
console.log(newCounterFactory.inc());
console.log(newCounterFactory.dec());

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
