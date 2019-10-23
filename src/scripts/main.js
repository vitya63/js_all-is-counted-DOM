'use strict';

const page = document.documentElement;
const counter = 'counter';
const counterContainer = document.querySelector('#counter');
if (!sessionStorage.getItem(counter)) {
  sessionStorage.setItem(counter, 0);
}
counterContainer.textContent = sessionStorage.getItem(counter);

function changeCount() {
  sessionStorage.counter = Number(sessionStorage.counter) + 1;
  counterContainer.textContent = sessionStorage.getItem(counter);
}

page.addEventListener('click', changeCount);
