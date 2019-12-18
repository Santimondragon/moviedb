import {
    observable,
    action
} from 'mobx';

class Store {
    @observable navegation: string = "home";
    @observable popularMovies: any[] = [];
    @observable favoritesMovies: any[] = [];
    @observable selectedMovie: any;
    
    @action arrangeMovies(array: any[]){
        this.popularMovies = array.sort((a:any, b:any) => {
            return b.popularity - a.popularity;
        });
    }

    @action updateNavegation(item: string) {
        this.navegation = item;
    }

    @action selectMovie(newSelectedMovie: any) {
        this.selectedMovie = newSelectedMovie;
        localStorage.setItem('selectedMovie', JSON.stringify(newSelectedMovie));
    };

    @action addFavorite(newFavorite: any){
        this.favoritesMovies.push(newFavorite);
        this.popularMovies = this.popularMovies.filter(movie => movie != newFavorite);
    }

    @action removeFavorite(oldFavorite: any){
        this.popularMovies.push(oldFavorite);
        this.favoritesMovies = this.favoritesMovies.filter(movie => movie != oldFavorite);
    }
    
    @observable name: string = "Nombre";

    @action aFunction(value: any) {
        this.name = value;
    }



}

export const store = new Store();