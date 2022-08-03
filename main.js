import './style.css';
import buttonStyle from './button.module.css';
import imageStyle from './image.module.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';
import imgVue from './vue-js.svg';
import { user } from './data.json';
import suma from './suma.ts';

console.log(`suma 2+3 = ${suma(2, 3)}`);

const modules = import.meta.glob('./modules/*.js');
console.log(modules);

for (const path in modules) {
  modules[path]().then((module) => {
    module.load();
  });
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <img id="imgVue" src="${imgVue}" class="${imageStyle.imgVue}" />
    <h1>Hello Jairo!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <button id="btn" class="${buttonStyle.btn}" >Click!</button>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;
//document.getElementById('btn').className = buttonStyle.btn;

setupCounter(document.querySelector('#counter'));
