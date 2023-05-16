import './style.css';

import { setupCounter } from './counter.ts';
import { Header } from './header.ts';
import { Footer } from './footer.ts';
import { homeTemplate } from './home.ts';
import { page1Template } from './page1.ts';
import { Menu } from './components/nav.ts';

const rootElement = document.querySelector<HTMLDivElement>('#app')!;

const path = window.location.pathname;

// (Sin window) const path = location.pathname

export type MenuOptions = {
  url: string;
  label: string;
}[];

const menuOptions = [
  { url: 'index.html', label: 'Home' },
  { url: 'page1.html', label: 'Page1' },
];

// rootElement.innerHTML = header;

if (path.includes('index')) {
  // Tambien if(path === '/index.html')
  new Header('#app');
  new Menu('header', menuOptions);

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

  rootElement.innerHTML += homeTemplate;
} else {
  rootElement.innerHTML += page1Template;
}

// rootElement.innerHTML += footer();

new Footer('#app', 'ISDI Coders');
