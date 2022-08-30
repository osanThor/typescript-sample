{
  /**
   * Enum
   */
  //javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WENDSDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDSDAY: 2 });
  const dayOfTooday = DAYS_ENUM.MONDAY;

  //Typescript
  // enum 보단 union type 쓰기 아래처럼
  type DaysOfWeek = "Monday" | "Tuesday" | "Wendsday";
  enum Days {
    Monday = 1, // =1 안쓰면 0부터 시작, String은 모든 변수에 값을 선언 필요
    Tuesday, //1
    Wendsday, //2
    Thursday, //3
    Friday,
    Saterday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day: Days = Days.Saterday;
  console.log(day);

  let daysOfWeek: DaysOfWeek = "Monday";
  daysOfWeek = "Wendsday";
}
