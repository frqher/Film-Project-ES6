class Storage{

    static getLocalStorage(){
        let films;
    
        if(localStorage.getItem("films") === null){
            films = [];
        }
        else{
            films = JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    }
    
    static addFilmToStorage(newFilm){
        let films = this.getLocalStorage();
        films.push(newFilm);
    
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static deleteFilmFromStorage (e){
        let title = e.parentElement.previousElementSibling.previousElementSibling.textContent;
        let films = this.getLocalStorage();
    
        films.forEach(function(film, index){
            if(film.title === title){
                films.splice(index, 1)
            }
        });
    
        localStorage.setItem("films", JSON.stringify(films));
    }
    
    static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }

}

