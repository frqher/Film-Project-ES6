const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// Tum eventler

eventListeners()

function eventListeners(){
    form.addEventListener("submit", addFilm);
    cardBody.addEventListener("click", deleteFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getLocalStorage();
        UI.loadAllFilms(films);
    });
    clear.addEventListener("click", clearAllFilms)
}



function deleteFilm(e){

    if (e.target.id === "delete-film"){
        // console.log(e.target.parentElement.parentElement)
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target);
        UI.displayMessages("Silme islemi basarili!", "success");
    }
}

function clearAllFilms(){
    if(confirm("Emin misiniz ?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }   
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        // * Hata
        UI.displayMessages("Tum alanlari doldur", "danger");
    }
    else{
        // * Yeni film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // * Arayuze film ekleme
        Storage.addFilmToStorage(newFilm);
        UI.clearInputs(titleElement, directorElement, urlElement); // * Input Temizleme
        UI.displayMessages("Eklendi", "success");
    }

    e.preventDefault();
}

