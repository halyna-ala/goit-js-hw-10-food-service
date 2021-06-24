
import eventsTemplate from '../templates/events.hbs';
import upcomingEvents from '../menu.json';

const eventBoard = document.querySelector('.js-menu');
eventBoard.innerHTML = eventsTemplate({upcomingEvents});

// window.onload = () => {
//         const menu = document.getElementById("js-menu");
//         menu.innerHTML = eventsTemplate(upcomingEvents);
//     };

// const menuCard = createCards(upcomingEvents);
// eventBoard.insertAdjacentHTML ('beforeend', menuCard);

// function createCards(upcomingEvents) {
//     return upcomingEvents.map(eventsTemplate)
//     .join('');
// }


