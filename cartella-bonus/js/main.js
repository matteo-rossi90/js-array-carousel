/* creare un carosello delle immagini nel documenti HTML */

/* BONUS 1: Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine 
precedente, dovrà comparire l’ultima immagine dell’array e viceversa*/

/* BONUS 2: Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, 
tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. 
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva*/

//inserire le immagini del carosello da html a js

//creare un array che contiene le immagini
const carouselArray = [
    'img/01.webp', 
    'img/02.webp', 
    'img/03.webp',
    'img/04.webp',
    'img/05.webp' 
];

//selezionare il container che raccoglierà le immagini
const itemContainer = document.querySelector("#item-container");

//estrapolare i singoli dati

for (let i = 0; i < carouselArray.length; i++){
    let itemImg = carouselArray[i];

    //creare per ogni iterazione l'elemento di markup che conterrà l'immagine
    let itemContent = `<div class="item">
                            <img src="${itemImg}">
                        </div>`;
    
    //fare in modo che il contenuto dei div di markup e le rispettive immagini
    //siano inserite nel contenitore selezionato
    itemContainer.innerHTML += itemContent;

}

//inserire tutti gli elementi di markup in base alla classe ".item"

const items = document.getElementsByClassName("item");

//provare a inserire la classe ".active" per ogni singolo elemento
let activeItems = 0;
items[activeItems].classList.add("active");

//selezionare l'id del bottone che fa scorrere lo slider di destra
const nextButton = document.querySelector("#right");

//selezionare l'id del bottone che fa scorrere lo slider di sinistra
const prevButton = document.querySelector("#left");

//creare un evento che permetta di avanzare le immagini al click
nextButton.addEventListener('click',
    function(){

        // Rimuovere la classe active dell'immagine precedente 
        items[activeItems].classList.remove("active");

        // Incrementare il valore degli items e gestire i limiti
        activeItems = (activeItems + 1) % items.length;

        // Associare la classe active agli items
        items[activeItems].classList.add("active");
        
    }
);

//creare un evento che permetta di ritornare alle immagini cliccando il pulsante di sinistra
prevButton.addEventListener('click', 
    function(){

        // Rimuovere la classe active dell'immagine precedente
        items[activeItems].classList.remove("active");

        // decrementare il valore degli items
        activeItems = (activeItems - 1 + items.length) % items.length;

        // Associare la classe active agli items
        items[activeItems].classList.add("active");
    }
);

// Selezionare gli elementi di markup che rappresentano le anteprime delle immagini
const thumbButton = document.querySelectorAll(".box-image");

// Aggiungere un evento di click a ciascuna anteprima
for (let i = 0; i < thumbButton.length; i++) {
    thumbButton[i].addEventListener('click', 
        
        function () {

        // Rimuovere la classe active dall'immagine attualmente attiva
        items[activeItems].classList.remove("active");

        // Rimuovere la classe selected da tutte le anteprime
        for (let x = 0; x < thumbButton.length; x++) {
        thumbButton[x].classList.remove("selected");
            
            //aggiungere a img l'effetto che annulla il filtro quando selezionata
            this.classList.add("selected");
        }

        // Impostare il nuovo indice attivo in base all'indice della freccia cliccata
        activeItems = i;

        // Aggiungere la classe active all'immagine corrispondente
        items[activeItems].classList.add("active");

    });
}
