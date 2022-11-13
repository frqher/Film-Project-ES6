class UI{
    static addFilmToUI(newFilm){

        const filmList = document.getElementById("films");
        filmList.innerHTML += `
            <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
        `
    }
    
    static clearInputs(e1, e2, e3){
        e1.value = ""
        e2.value = ""
        e3.value = ""
    }
    
    static displayMessages(msg, type){
    
        const cardBody = document.querySelector(".card-body");
    
        // Alert divini olusturma
        const div = document.createElement("div");
    
        div.className = `alert alert-${type}`
        div.textContent = msg;
    
        cardBody.appendChild(div);
    
        setTimeout(function(){
            div.remove();
        }, 3000)
    
        
    }
    
    static loadAllFilms(films){
        const filmList = document.getElementById("films");
    
        films.forEach(function(film){
            filmList.innerHTML += `
                <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                </tr>
            `
        });
    }
    
    static deleteFilmFromUI(e){
        e.parentElement.parentElement.remove();
    }
    
    
    static clearAllFilmsFromUI(){
        const filmList = document.getElementById("films");
        
        while(filmList.firstElementChild !== null){
            filmList.firstElementChild.remove();
        }
    }
    
}

