{
  //   //Javascript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScript ⭐️
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //Javascript 💩
  //   function jsFetchNum(id) {
  //     //code...
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //TypeScript ⭐️
  //   function FetchNum(id: string): Promise<number> {
  //     //code...
  //     //code...
  //     //code...
  //     //code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //Javascript ⭐️ => Typescript
  //Optional parameter 전달해도 되고 안해도 되고
  function printName(first: string, last?: string) {
    console.log(first);
    console.log(last);
  }
  printName("steve", "jobs");
  printName("jobs");
  printName("steve", undefined);

  //default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage("hi");
  printMessage();

  //Rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 0));
}
