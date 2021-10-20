import _ from 'lodash';
import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    // Creo el botón
    const btn = document.createElement('button');
    btn.setAttribute('content', 'VALE!');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'with button'], ' ');
    element.classList.add('hello');

    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
