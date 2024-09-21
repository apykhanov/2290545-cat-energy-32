/* в этот файл добавляет скрипты*/
const headerNav = document.querySelector('.header-nav');
const toggle = document.querySelector('.header-nav__toggle');
const siteList = document.querySelector('.site-list');


siteList.classList.remove('site-list--opened');

toggle.addEventListener('click', () => {
  headerNav.classList.toggle('header-nav--closed');
  siteList.classList.toggle('site-list--opened');
});
