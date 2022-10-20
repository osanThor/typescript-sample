import { PageComponent } from "./components/page.js";

class Main {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);
  }
}

new Main(document.querySelector(".container")! as HTMLElement);
