// 1.1 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) elementToRemove.remove();

// 1.3 
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printDiv = document.querySelector('[data-function="printHere"]');

const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
printDiv.appendChild(ulCars);

// 1.4 
const countryData = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const container = document.createElement('div');
container.classList.add('gallery');
document.body.appendChild(container);

countryData.forEach((item, index) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h4');
  title.textContent = item.title;

  const image = document.createElement('img');
  image.src = item.imgUrl;

  // 1.5 
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar el último';
deleteLastBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.gallery .card');
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.appendChild(deleteLastBtn);


  // 1.6 Botón para eliminar este div
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar este';
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(deleteBtn);
  container.appendChild(card);
});

