//***************************TOMBOLA***********************

//---------------------------PATRE STATICA-----------------
//1. devo creare il numero di celle contenente i numei da inserire
//2. devo inserirle, appenderle nel file html

const array = [];
const arrayRandomNumbers = [];

const createCells = (range) => {
  //1. cerco riferimento al div 'tabellone'
  const tabellone = document.getElementById("tabellone");

  //2. creo adesso le celle da inserire dentro il tabellone (76 celle da 1 a 76)
  for (let index = 0; index < range; index++) {
    //2.1 ad ogni ciclo creo un div,ovvero la cella che conterrà il numero
    const tombolaCell = document.createElement("div");

    //2.2 aggiungo classe alla cella
    tombolaCell.classList.add("cell");

    //2.3 all'inerno del div creo un h4 che conterrà il numero
    const cellNumber = document.createElement("h4");
    cellNumber.innerText = index + 1;

    //pusho tutti gli i numeri del tabellone in un array
    array.push(index + 1);
    //2.4 appendo l'h4 alla cella
    tombolaCell.appendChild(cellNumber);

    //2.5 appendo la cella al tabellone
    tabellone.appendChild(tombolaCell);
  } //chiudo il FOR
  console.log(array);
};

//3. creo funzione per generare un numero random da 1 a 76
const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  return randomNumber;
};

const generateRandomNumber = (range) => {
  const random = getRandomNumber(range);
  //2.8.riporto il numero estratto su un h2
  const numberDisplayed = document.querySelector("h2");
  numberDisplayed.innerText = random;
  const cells = document.querySelectorAll(".cell");
  cells[random - 1].classList.add("selected");
};

window.onload = () => {
  const range = 76;
  createCells(range);
  const randomButton = document.getElementById("random-bttn");
  randomButton.addEventListener("click", () => {
    generateRandomNumber(range);
  });
};
