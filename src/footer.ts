import { Component } from './components/components';

export class Footer extends Component {
  // brand: string; se cpuede comentar por poner public en constructor
  constructor(selector: string, public brand: string) {
    super(selector);
    // this.brand = brand se puede comentar por poner public en comnstructor
    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    return `<footer>
  <address>${this.brand}</address>
</footer>`;
  }
}
