type PageInfo = {
  title: string;
};
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" },
};

//also 유틸리티 타입 ==> 대문자로
type Product = "cat" | "dog";
type NewProduct = Capitalize<Product>; // "Cat", "Dog"
