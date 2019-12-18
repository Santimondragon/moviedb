import React from 'react';
import { useObserver } from 'mobx-react';
import { store } from '../../stores/Store';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Movie() {
    return useObserver(() =>(
        <li className="movie active">
        <div className="bg">
          <img
            className="poster"
            src="https://image.tmdb.org/t/p/w185/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg"
            alt="bg"
          />
        </div>
        <section className="information">
          <h1 className="title">6 Underground</h1>
          <p className="rating"><b>6.1</b>/10</p>
          <p className="runtime">2h 7m</p>
          <ul className="genreList">
            <li className="genre">Action</li>
            <li className="genre">Thriller</li>
          </ul>
          <p className="tagline">
            They say no one can save the world. MEET NO ONE.
          </p>
          <article className="buttons">
              <button className="favorite">
                <FontAwesomeIcon icon={faStar} className="icon" />
              </button>
              <button className="details">View Details</button>
            </article>
        </section>
      </li>
    ));
}

export default Movie;