'use strict';
const book = document.querySelectorAll('.book');

console.log(book);

book[0].before(book[1]);
book[0].after(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const bookLi = book[0].querySelectorAll('li');
bookLi[10].before(bookLi[2]);
bookLi[9].before(bookLi[7]);
bookLi[3].after(bookLi[6]);
bookLi[4].before(bookLi[8]);

const bookLi5 = book[5].querySelectorAll('li');
bookLi5[1].before(bookLi5[9]);
bookLi5[4].after(bookLi5[2]);
bookLi5[0].after(bookLi5[1]);
bookLi5[8].before(bookLi5[5]);

const bookLi6 = book[2].querySelectorAll('li');
bookLi6[8].insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>");

