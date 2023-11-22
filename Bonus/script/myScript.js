// Metodo append()

// Creo una variabile associata al container
const container = document.querySelector(".container");

// For Loop per (1 => 100)
for (let i = 1; i <= 100; i++) {

  // Creazione div generico
  const square = document.createElement('div');

  // Se la mia variabile i (del Loop) 
  // è divisibile per 3 && 5 => "FizzBuzz";
  if (i % 15 === 0) {
    // Gli do una classe
    square.className = 'square fizz-buzz';
    // Inserisco il contenuto nel div con append
    square.append('fizzBuzz');

    // è divisibile per 5 => "Buzz";
  } else if (i % 5 === 0) {
    // Gli do una classe
    square.className = 'square buzz';
    // Inserisco il contenuto nel div con append
    square.append('Buzz');

    // è divisibile per 3 => "Fizz"; 
  } else if (i % 3 === 0) {
    // Gli do una classe
    square.className = 'square fizz';
    // Inserisco il contenuto nel div con append
    square.append('Fizz');

    // Altrimenti stampa il numero;
  } else {
    // Gli do una classe
    square.className = 'square';
    // Inserisco il contenuto nel div con append
    square.append(i);
  }

  container.append(square);

}

/*

// Metodo innerHtml

// Creo una variabile associata al container
const container = document.querySelector(".container");

// Creo la variabile 'square'
let square = '';

// For Loop per (1 => 100)
for (let i = 1; i <= 100; i++) {

  // Se la mia variabile i (del Loop) 

  // è divisibile per 3 && 5 => "FizzBuzz";
  if (i % 15 === 0) {
    // Assegno la variabile a un div con classe .square e .fizz-buzz e do un contenuto ('fizzbuzz')
    square = `<div class="square fizz-buzz"> 'FizzBuzz' </div>`;

    // è divisibile per 5 => "Buzz";
  } else if (i % 5 === 0) {
    // Assegno la variabile a un div con classe .square e .buzz e do un contenuto ('buzz')
    square = `<div class="square buzz"> 'Buzz' </div>`;

    // è divisibile per 3 => "Fizz"; 
  } else if (i % 3 === 0) {
    // Assegno la variabile a un div con classe .square e .fizz e do un contenuto ('fizz')
    square = `<div class="square fizz"> 'Fizz' </div>`;

    // Altrimenti stampa il numero;
  } else {
    // Assegno la variabile a un div con classe .square e do un contenuto (i)
    square = `<div class="square"> ${i} </div>`;
    }

  container.innerHTML += square;
}

*/
