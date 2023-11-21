// Creo una variabile associata al container
const container = document.querySelector(".container");

// For Loop per (1 => 100)
for (let i = 1; i <= 100; i++) {

  // Se la mia variabile i (del Loop) 

  // è divisibile per 3 && 5 => "FizzBuzz";
  if (i % 3 === 0 && i % 5 === 0) {
    const squareFizzBuzz= `<div class="square fizz-buzz"> ${'FizzBuzz'} </div>`;
    container.innerHTML += squareFizzBuzz;

    // è divisibile per 5 => "Buzz";
  } else if (i % 5 === 0) {
    const squareBuzz= `<div class="square buzz"> ${'Buzz'} </div>`;
    container.innerHTML += squareBuzz;

    // è divisibile per 3 => "Fizz"; 
  } else if (i % 3 === 0) {
        const squareFizz= `<div class="square fizz"> ${'Fizz'} </div>`;
    container.innerHTML += squareFizz;

    // Altrimenti stampa il numero;
  } else {
    const square= `<div class="square"> ${i} </div>`;
    container.innerHTML += square;
  }
}