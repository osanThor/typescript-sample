{
  /*
   *Type Aliases
   */
  type Text = string;
  const name: Text = "jun";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "jun",
    age: 12,
  };
  /*
   *String Literal Types
   */
  type Name = "name";
  let junName: Name;
  junName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
