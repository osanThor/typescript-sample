interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("Full Time");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("Part Time!");
  }
  workPartTime() {}
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const eillie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
eillie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(eillie);
const bobAfterPay = pay(bob);

const obj = {
  name: "ellie",
  age: 20,
};
const obj2 = {
  animal: "🐕",
};

function getValue<T, K extends keyof T, V>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name"));
console.log(getValue(obj, "age"));
console.log(getValue(obj2, "animal"));
