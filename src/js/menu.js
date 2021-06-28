// import '@fortawesome/fontawesome-free/js/brands.js';
// import '@fortawesome/fontawesome-free/js/solid.js';
// import '@fortawesome/fontawesome-free/js/fontawesome.js';
import eventsTemplate from '../templates/events.hbs';
import upcomingEvents from '../menu.json';
// import 'modern-normalize/modern-normalize.css';



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
    const bodyColor = document.querySelector('body');

    const checkbox = document.querySelector('#theme-switch-toggle');
    
    checkbox.addEventListener('change', clickOnCheckbox)
    
    if (localStorage.getItem('theme-type') === Theme.DARK) {
    
        bodyColor.classList.add(Theme.DARK)
        localStorage.setItem('theme-type', Theme.DARK)
        checkbox.setAttribute('checked', true)
    } else {
        bodyColor.classList.add(Theme.LIGHT)
    }
    
    function clickOnCheckbox() {
        if (bodyColor.classList.value === Theme.LIGHT) {
            bodyColor.classList.toggle(Theme.DARK)
            bodyColor.classList.toggle(Theme.LIGHT)
    
            localStorage.setItem('theme-type', bodyColor.classList.value)
        } else {
            bodyColor.classList.toggle(Theme.DARK)
            bodyColor.classList.toggle(Theme.LIGHT)
    
            localStorage.setItem('theme-type', bodyColor.classList.value)
        }
    }
// const bodyEl = document.querySelector('body');
// const themeSwitch = document.querySelector('#theme-switch-toggle'); 

// themeSwitch.addEventListener('change', onClickThemeSwitch);


// if (localStorage.getItem('theme-type') === Theme.DARK) {

//   bodyEl.classList.add(Theme.DARK)
//   localStorage.setItem('theme-type', Theme.DARK)
//   // themeSwitch.setAttribute('checked', true)
// } else {
//   bodyEl.classList.add(Theme.LIGHT)
// }
    
    
//     function onClickThemeSwitch() {
//         if (bodyEl.classList.value === Theme.LIGHT) {
//               bodyEl.classList.toggle(Theme.DARK)
//               bodyEl.classList.toggle(Theme.LIGHT)
        
//               localStorage.setItem('theme-type', bodyEl.classList.value)
//           } else {
//                 bodyEl.classList.toggle(Theme.DARK)
//                 bodyEl.classList.toggle(Theme.LIGHT)
          
//                 localStorage.setItem('theme-type', bodyEl.classList.value)
//             }
//           }
          
          
          
          
          
          
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
    


    // if (this.checked) {
    //   bodyEl.classList.add(Theme.DARK)
    //   bodyEl.classList.remove(Theme.LIGHT)
    //   window.localStorage.setItem('theme', Theme.DARK)
    // } else {
    //   bodyEl.classList.remove(Theme.DARK)
    //   bodyEl.classList.add(Theme.LIGHT)
    //   window.localStorage.setItem('theme', Theme.LIGHT)
    // }
    
    // const savetheme = window.localStorage.getItem('theme');
    // if (savetheme === 'dark-theme') {
    //     themeSwitch.checked = true;
    //     bodyEl.classList.add("dark-theme");
    // } else {bodyEl.classList.add("light-theme");};