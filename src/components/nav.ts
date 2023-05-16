import { MenuOptions } from '../main';
import { Component } from './components';

export class Menu extends Component {
  constructor(selector: string, public options: MenuOptions) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }
  createTemplate() {
    const links = this.options
      .map((option) => {
        `<li>
        <a href="${option.url}">${option.label}</a>
      </li>
      <li>
        <a href="page1.html">Page1</a>
      </li>`;
      })
      .join('');

    return `<nav>
    <ul>
      ${links}
    </ul>
  </nav>`;
  }
}
