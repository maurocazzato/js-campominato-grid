// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
const playGame = document.querySelector(".play");
const gridElement = document.querySelector(".grid");

playGame.addEventListener("click",
   

    
       function(gridElement){
            for (let i = 1; i <= 100; i++){
            
                const newElement = document.createMyElement("div", "square");
                gridElement.append(newElement);

            }
        }
            
    

);



function createMyElement (tagtype, classname){
    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
}



    





