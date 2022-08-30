{
  /**
   * Type Inference
   * 타입 추론
   */

  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number) {
    return x + y;
  }

  //알아서 type을 지정해줌 아래는 number
  //편하지만 간단한 코드 말고는 타입추론은 피하고 타입명시를 하자
  const result = add(1, 2);
}
