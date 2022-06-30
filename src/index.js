import './css/style.css';
import playersHealtStatusSort from './js/app';

const players = playersHealtStatusSort([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

players.forEach((element) => {
  document.querySelector('ul').innerHTML += `
     <li>${element.name} ${element.health}</li>
`;
});
