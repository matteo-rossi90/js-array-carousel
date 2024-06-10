/* creare un carosello delle immagini nel documenti HTML */

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