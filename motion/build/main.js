import { PageComponent } from "./components/page.js";
class Main {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
    }
}
new Main(document.querySelector(".container"));
