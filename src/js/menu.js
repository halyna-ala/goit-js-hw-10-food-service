import '@fortawesome/fontawesome-free/js/brands.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/fontawesome.js';
import eventsTemplate from '../templates/events.hbs';
import upcomingEvents from '../menu.json';
import 'modern-normalize/modern-normalize.css';



const eventBoard = document.querySelector('.js-menu');
eventBoard.innerHTML = eventsTemplate(upcomingEvents);

// window.onload = () => {
//         const menu = document.getElementById("js-menu");
//         menu.innerHTML = eventsTemplate(upcomingEvents);
//     };

const bodyEl = document.querySelector('body');

const themeSwitch = document.querySelector('#theme-switch-toggle'); 

themeSwitch.addEventListener('change', onThemeSwitch);

    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
      };

bodyEl.classList.add(Theme.LIGHT);

function onThemeSwitch(evt) {

const isLightTheme = themeSwitch.checked;


  if (isLightTheme) {
    bodyEl.classList .replace(Theme.LIGHT, Theme.DARK);
} else bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);

//   isLightTheme = !isLightTheme;

localStorage.setItem('checked-Value', isLightTheme);
    const savedChecked = localStorage.getItem('checked-Value');
    console.log(savedChecked);
    
}

