//***************************TOMBOLA***********************

//---------------------------PATRE STATICA-----------------
//1. devo creare il numero di celle contenente i numei da inserire
//2. devo inserirle, appenderle nel file html
const array = [];
const createCells = (cells) => {
  //1. cerco riferimento al div 'tabellone'
  const tabellone = document.getElementById("tabellone");

  //2. creo adesso le celle da inserire dentro il tabellone (76 celle da 1 a 76)
  for (let index = 0; index < cells; index++) {
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

    //2.6. creo riferimento al bottone della pagina
    const button = document.querySelector("button");

    //2.7. aggiungo funzione al click del pulsante per generare il numero e restituirlo dentro ad un h2
    button.addEventListener("click", () => {
      const extractNumber = generateRandomNumber();

      //2.8.riporto il numero estratto su un h2
      const numberDisplayed = document.querySelector("h2");
      numberDisplayed.innerText = extractNumber;

      if (generateRandomNumber() === array[index])
        cellNumber.classList.add("selected");
    });
  }
  console.log(array);
};

//3. creo funzione per generare un numero random da 1 a 76
const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  return randomNumber;
};

const cells = 76;
createCells(cells);
generateRandomNumber();
