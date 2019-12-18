import React from 'react';
import "./Recomendations.scss";

function Recomendation() {
    return (
      <section id="recomendations">
        <div className="bg">
          <img
            src="https://image.tmdb.org/t/p/original/5BwqwxMEjeFtdknRV792Svo0K1v.jpg"
            alt="bg"
          />
        </div>
        <section className="information">
          <article>
            <h1 className="title">Ad Astra</h1>
            <span className="rating"><b>6.1</b>/10</span>
          </article>
          <ul className="genreList">
            <li className="genre">Science Fiction</li>
            <li className="genre">Drama</li>
            <li className="genre">Thriller</li>
            <li className="genre">Adventure</li>
            <li className="genre">Mystery</li>
          </ul>
          <p className="overview">
            The near future, a time when both hope and hardships drive humanity
            to look to the stars and beyond. While a mysterious phenomenon
            menaces to destroy life on planet Earth, astronaut Roy McBride
            undertakes a mission across the immensity of space and its many
            perils to uncover the truth about a lost expedition that decades
            before boldly faced emptiness and silence in search of the unknown.
          </p>
          <article>
            <span className="runtime">2h 3m</span>
            <span className="release">2019-09-17</span>
          </article>
        </section>
      </section>
    );
}

export default Recomendation;