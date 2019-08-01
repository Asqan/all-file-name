const txt = document.querySelector('div.info');

function changeText() {

    const wielkoscscrolla = window.scrollY; //aktulana pozycja scroll zaczynając od góry

    const wysokoscsekcji1 = document.querySelector(".sekcja1").clientHeight;
    const wysokoscsekcji2 = document.querySelector(".sekcja2").clientHeight;
    const wysokoscsekcji3 = document.querySelector(".sekcja3").clientHeight;
    const wysokoscsekcji4 = document.querySelector(".sekcja4").clientHeight;



    ///odleglosc sekcji od góry
    const odlegoscodgory1 = document.querySelector(".sekcja1").offsetTop - 50
    const odlegoscodgory2 = document.querySelector(".sekcja2").offsetTop
    const odlegoscodgory3 = document.querySelector(".sekcja3").offsetTop
    const odlegoscodgory4 = document.querySelector(".sekcja4").offsetTop

    if (wielkoscscrolla < wysokoscsekcji1) {
        txt.textContent = "sekcja1"
        console.log(`wysokosc sekcji1 to ${wysokoscsekcji1}`); //wysokosc sekcji1
    } else if (wielkoscscrolla < wysokoscsekcji2 + odlegoscodgory2) { // wysokosc sekcji 2 500 + odloegosc od góry 400 = 900 ( ttyle ile ma sekcja 1s) czyli zmiany przy 900 od góry
        txt.textContent = "sekcja2"
        console.log(`wysokosc sekcji2 + odloegosc2 to ${wysokoscsekcji2 + odlegoscodgory2}`);

    } else if (wielkoscscrolla < wysokoscsekcji3 + odlegoscodgory3) {
        txt.textContent = "sekcja3"
        console.log(`wysokosc sekcji3 + odloegosc3 to ${wysokoscsekcji3 + odlegoscodgory3}`);
    } else {
        txt.textContent = "sekcja4"
        console.log(`wysokosc sekcji3 + odloegosc3 to ${wysokoscsekcji4 + odlegoscodgory4}`);
    }



}
window.addEventListener('scroll', changeText);