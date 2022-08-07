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
  let name: undefined; //똥
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; //똥
  let person2: string | null;
}
