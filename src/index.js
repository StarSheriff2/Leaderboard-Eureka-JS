import './css/reset.css';
import './css/main.css';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello Webpack';

  return element;
}

document.body.appendChild(component());
