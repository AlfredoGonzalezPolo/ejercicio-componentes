export abstract class Component {
  selector: string;
  template!: string;
  element!: Element;
  constructor(selector: string) {
    this.selector = selector;
  }

  render(position: InsertPosition = 'beforeend') {
    const element = document.querySelector(this.selector);
    if (!element) throw Error('Invalid selector');
    this.element = element;
    //Ahora se "pinta"
    // this.element.innerHTML = this.template;
    this.element.insertAdjacentHTML(position, this.template);
  }
}
