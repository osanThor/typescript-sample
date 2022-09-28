{
  const obj = {
    name: "junyoung",
  };

  obj.name; // "junyoung"
  obj["name"]; // "junyoung"

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string
  const text: Name = "hello world";

  type Gender = Animal["gender"]; //"male" | "female";

  type Keys = keyof Animal; //'name'|'age'|'gender'
  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "junyoung",
    gender: "male",
  };
}
