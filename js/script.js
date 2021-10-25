/* Scrivi un programma che esegua un ciclo da 1 a 100

A ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice:

per i multipli di 3,
per i multipli di 5
e per i valori che sono sia multipli di 3 che di 5. */

const contSqr = document.getElementById("containerSqr");

for (i=1; i<=100; i++) {

    //creo la variabile con l elemento div
    let eleSqr = document.createElement("div");
    // aggiungo all elemento div la classe sqr
    eleSqr.classList.add("sqr");

    //creo la variabile con l elemento div
    let cntSqr = document.createElement("div");
    //aggiungo all elemento div la classe contentSqr
    cntSqr.classList.add("contentSqr")

    //appendo l elemento sqr dentro il container sqr
    contSqr.append(eleSqr);

    //appendo l elemento contentSqr dentro l elemento sqr
    eleSqr.append(cntSqr);
    cntSqr.append(i);
    
    //creo gli if else

    
}