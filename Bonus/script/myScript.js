// Metodo append()

// Creo una variabile associata al container
const container = document.querySelector(".container");

// For Loop per (1 => 100)
for (let i = 1; i <= 100; i++) {

  // Se la mia variabile i (del Loop) 

  // è divisibile per 3 && 5 => "FizzBuzz";
  if (i % 3 === 0 && i % 5 === 0) {
    // Creo il div
    const fizzBuzz = document.createElement('div');
    // Gli do una classe
    fizzBuzz.className = 'square fizz-buzz';
    // Inserisco il contenuto nel div con append
    fizzBuzz.append('FizzBuzz');
    // "Aggiungo" il div al container
    container.append(fizzBuzz);


    // è divisibile per 5 => "Buzz";
  } else if (i % 5 === 0) {
    // Creo il div
    const buzz = document.createElement('div');
    // Gli do una classe
    buzz.className = 'square buzz';
    // Inserisco il contenuto nel div con append
    buzz.append('Buzz');
    // "Aggiungo" il div al container
    container.append(buzz);

    // è divisibile per 3 => "Fizz"; 
  } else if (i % 3 === 0) {
    // Creo il div
    const fizz = document.createElement('div');
    // Gli do una classe
    fizz.className = 'square fizz';
    // Inserisco il contenuto nel div con append
    fizz.append('Fizz');
    // "Aggiungo" il div al container
    container.append(fizz);

    // Altrimenti stampa il numero;
  } else {
    // Creo il div
    const square = document.createElement('div');
    // Gli do una classe
    square.className = 'square';
    // Inserisco il contenuto nel div con append
    square.append(i);
    // "Aggiungo" il div al container
    container.append(square);
  }
}


// Metodo innerHtml

// Creo una variabile associata al container
// const container = document.querySelector(".container");

// For Loop per (1 => 100)
// for (let i = 1; i <= 100; i++) {

  // Se la mia variabile i (del Loop) 

  // è divisibile per 3 && 5 => "FizzBuzz";


  // if (i % 3 === 0 && i % 5 === 0) {
  //   const squareFizzBuzz= `<div class="square fizz-buzz"> ${'FizzBuzz'} </div>`;
  //   container.innerHTML += squareFizzBuzz;

    // è divisibile per 5 => "Buzz";
  // } else if (i % 5 === 0) {
  //   const squareBuzz= `<div class="square buzz"> ${'Buzz'} </div>`;
  //   container.innerHTML += squareBuzz;

    // è divisibile per 3 => "Fizz"; 
  // } else if (i % 3 === 0) {
  //       const squareFizz= `<div class="square fizz"> ${'Fizz'} </div>`;
  //   container.innerHTML += squareFizz;

    // Altrimenti stampa il numero;
//   } else {
//     const square= `<div class="square"> ${i} </div>`;
//     container.innerHTML += square;
//   }
// }
