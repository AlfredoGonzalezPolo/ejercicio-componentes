import { Component } from './components/components';
// import { Menu } from './components/nav';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    // new Menu('header');
  }
  createTemplate() {
    return `
<header>
  <h1>Learning Typescript</h1>
</header>;
`;
  }
}
