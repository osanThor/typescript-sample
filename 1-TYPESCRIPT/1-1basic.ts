{
  /*
   *Primitive: number, string, boolean, bigint, symbol, null, undefinded
   *Object: function, array.....
   */

  //number
  const num: number = 0;

  //string
  const str: string = "hello";

  //boolean
  const bool: boolean = true;

  //undifined
  let name: undefined; //💩
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; //💩
  let person2: string | null;

  //unknown 💩 가능한 안쓰는게 좋음
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 💩 가능한 안쓰는게 좋음
  let anyting: any = 0;
  anyting = "hello";

  //void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; //💩

  //never 함수에서 절대 return 되는 값이 없는 경우
  function throwError(message): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  //object
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "god" });
}
