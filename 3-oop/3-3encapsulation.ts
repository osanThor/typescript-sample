{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //pubilc
  //private
  //protected

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOP: number = 7; //class level
    coffeeBeans: number = 0; //instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makerMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoddeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOP;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  maker.fillCoddeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("0보다 작음");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {}
  }
  const user = new User("Steve", "jobs");
  user.age = 6;
  console.log(user.fullName);
}
