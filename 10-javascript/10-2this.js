console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// const caller = counter.increase.bind(counter); //bind 묶어주다
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
