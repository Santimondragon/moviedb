import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
import { store } from '../../stores/Store';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Favorites() {

  const fecthMovies = async () => {
    console.log("fetching");
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=e01547dc04c1a3b9945d0731b2b8f86d&language=en-US&page=1");
    //await console.log(response.json());
    const data = await response.json();
    console.log(data);

    store.popularMovies = await data.results;
  };

  return useObserver(() => (
    <section id="favorites">
      <h3 className="title">Favorites</h3>
      <ul className="movieList">
        {store.favoritesMovies.map((elem: any, index: number) => (
          <li key={elem.id}
            onClick={() => {
              store.selectMovie(elem);
            }}
            className={store.selectedMovie === elem ? 'movie active' : 'movie'}>
            <div className="bg"
            >
              <img
                className="poster"
                src={"https://image.tmdb.org/t/p/w185/" + elem.poster_path}
                alt="bg"
              />
            </div>

            <section className="information">
              <h1 className="title">{elem.title}</h1>
              <p className="rating">
                <b>{elem.vote_average}</b>/10
            </p>
              <p className="runtime">{"" + elem.original_language.toUpperCase()}</p>
              <ul className="genreList">
                <li className="genre">Action</li>
                <li className="genre">Thriller</li>
              </ul>
              <p className="tagline">
                {"" + elem.overview.substring(0, 80).trim() + "..."}
              </p>
              <article className="buttons">
                <button
                  onClick={() => {
                    store.removeFavorite(elem);
                    document.querySelectorAll(".movie").forEach((e, i) => {
                      if (i === index)
                        e.className = "movie"
                    });

                    store.arrangeMovies(store.popularMovies);
                    store.selectMovie({});
                  }}
                  className="favorite  selected">
                  <FontAwesomeIcon icon={faStar} className="icon" />
                </button>
                <button className="details">View Details</button>
              </article>
            </section>
          </li>
        ))}
      </ul>
    </section>
  ));
}

export default Favorites;