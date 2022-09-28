{
  type Video = {
    title: string;
    author: string;
  };
  [1, 2, 3].map((item) => item * item);
  type Optional<T> = {
    [P in keyof T]?: T[P]; //for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    age: 12,
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
  };
  // type Videpoptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadonly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: "hi",
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxyfy<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
