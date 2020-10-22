// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuLion = document.querySelector('.menu-lion');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link');
const icons = document.querySelectorAll('.icons');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuLion.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        navLinks.forEach(item => item.classList.add('show'));
        icons.forEach(item => item.classList.add('not-show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuLion.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        navLinks.forEach(item => item.classList.remove('show'));
        icons.forEach(item => item.classList.remove('not-show'));

        showMenu = false;
    }
}