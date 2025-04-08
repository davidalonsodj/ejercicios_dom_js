//1.1
const boton = document.querySelector('.showme');
console.log('1.1 Botón:', boton);
//1.2
const h1 = document.querySelector('#pillado');
console.log('1.2 H1:', h1);
//1.3   
const parrafos = document.querySelectorAll('p');
console.log('1.3 Párrafos:', parrafos);
//1.4
const pokemones = document.querySelectorAll('.pokemon');
console.log('1.4 Pokemones:', pokemones);
//1.5
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 Personajes con data-function:', personajes);
//1.6
const tercerPersonaje = personajes[2];
console.log('1.6 Tercer personaje:', tercerPersonaje);