// 1.1 
const boton = document.getElementById('btnToClick');
boton.addEventListener('click', function(event) {
  console.log('Click event:', event);
});

// 1.2 
const inputFocus = document.querySelector('.focus');
inputFocus.addEventListener('focus', function() {
  console.log('Valor al hacer focus:', inputFocus.value);
});

// 1.3 
const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', function() {
  console.log('Valor escribiendo:', inputValue.value);
});
