//***************************TOMBOLA***********************

//---------------------------PATRE STATICA-----------------
//1. devo creare il numero di celle contenente i numei da inserire
//2. devo inserirle, appenderle nel file html

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

    //2.4 appendo l'h4 alla cella
    tombolaCell.appendChild(cellNumber);

    //2.5 appendo la cella al tabellone
    tabellone.appendChild(tombolaCell);
  }
};

//3. creo funzione per bottone che estrae un numero random da 1 a 76
const generateRandomNumber = () => {
  //3.1 creo riferimento del bottone alla pagina html
  const button = document.querySelector("button");

  //3.2 creo funzione al click del bottone che mi genera un numero random da 1 a 76
  button.onclick = (event) => {
    const randomNumber = Math.floor(Math.random() * 76) + 1;
  };
};

const cells = 76;
createCells(cells);
generateRandomNumber();
