{
  /**
   * Type Assertions 💩
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //😱😱😱😱😱😱😱😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  //절대 강조 ! <== 이거 붙이면 !important 랑 비슷 == 안좋음
  numbers!.push(2); //😱

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
  //or
}
