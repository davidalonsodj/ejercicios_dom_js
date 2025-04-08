// 2.1 
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2 
const divConP = document.createElement('div');
const pDentroDiv = document.createElement('p');
pDentroDiv.textContent = 'P dentro de un div';
divConP.appendChild(pDentroDiv);
document.body.appendChild(divConP);

// 2.3 
const divCon6P = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i}`;
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4 
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5 
const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

// 2.6 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7 
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
elementosAEliminar.forEach(el => el.remove());

// 2.8 
const todosLosDivs = document.querySelectorAll('body > div');
if (todosLosDivs.length >= 2) {
  const pEnMedio = document.createElement('p');
  pEnMedio.textContent = 'Voy en medio!';
  todosLosDivs[0].insertAdjacentElement('afterend', pEnMedio);
}

// 2.9 
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
divsInsertHere.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
