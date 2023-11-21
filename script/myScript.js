// Creo una variabile associata al container
const container = document.querySelector(".container");

// For Loop per (1 => 100)
for (let i = 1; i <= 100; i++) {

  // Assegno una variablie al contenuto e gli associo una classe (.square => CSS) ed un contenuto (i) tramite .innerHtml
  const square= `<div class="square"> ${i} </div>`;
  
  // "Assegno" i div con classe .square all'html
  container.innerHTML += square;

  
  // Se la mia variabile i (del Loop) è divisibile per 3 => "Fizz";
  
      // Se è divisibile per 5 => "Buzz";
      
      // Se è divisibile per 3 && 5 => "FizzBuzz";
      
      // ALtrimenti stampa il numero;
    
}