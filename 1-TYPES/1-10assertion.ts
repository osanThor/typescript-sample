{
  /**
   * Type Assertions π©
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //π±π±π±π±π±π±π±π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  //μ λ κ°μ‘° ! <== μ΄κ±° λΆμ΄λ©΄ !important λ λΉμ· == μμ’μ
  numbers!.push(2); //π±

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
  //or
}
