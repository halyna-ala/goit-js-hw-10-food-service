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
  
  const Theme = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
    };

const bodyEl = document.querySelector('body');
const themeSwitch = document.querySelector('#theme-switch-toggle'); 

themeSwitch.addEventListener('change', onClickThemeSwitch);



function onClickThemeSwitch() {
  if (bodyEl.classList.value === Theme.LIGHT) {
      bodyEl.classList.toggle(Theme.DARK)
      bodyEl.classList.toggle(Theme.LIGHT)

      localStorage.setItem('theme-type', bodyEl.classList.value)
  } else {
      bodyEl.classList.toggle(Theme.DARK)
      bodyEl.classList.toggle(Theme.LIGHT)

      localStorage.setItem('theme-type', bodyEl.classList.value)
  }
}


if (localStorage.getItem('theme-type') === Theme.DARK) {
  localStorage.setItem('theme-type', Theme.DARK)
  // themeSwitch.setAttribute('chacked', true)
  bodyEl.classList.add(Theme.DARK)
} else {
  bodyEl.classList.add(Theme.LIGHT) 
}



// bodyEl.classList.add(Theme.LIGHT);

// function onThemeSwitch(evt) {

// const isLightTheme = themeSwitch.checked;


//   if (isLightTheme) {
//     bodyEl.classList .replace(Theme.LIGHT, Theme.DARK);
// } else bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);

// //   isLightTheme = !isLightTheme;

// localStorage.setItem('checked-Value', isLightTheme);
//     const savedChecked = localStorage.getItem('checked-Value');
//     console.log(savedChecked);
    
// }