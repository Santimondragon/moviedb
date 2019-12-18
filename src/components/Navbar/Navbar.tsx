import React from 'react';
import { Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';
import { faHome, faSearch, faFilm, faStar, faList, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { store } from '../../stores/Store';
import "./Navbar.scss";

function NavBar() {
  return useObserver(() => (
    <section id="navbar">
      <section className="profile">
        <img
          src="./assets/images/profile.jpg"
          alt="Profile"
          className="picture"
        />
        <h1 className="name">Santiago Mondragón</h1>
        <p className="nickname">@santimondragon</p>
        <span className="status">Premium</span>
      </section>

      <section className="menu">
        <article className="item">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input id="search" type="text" placeholder="Browse" />
        </article>
        <Link
          onClick={() => {
            store.updateNavegation("home");
          }}
          className={store.navegation === "home" ? 'item active' : 'item'}
          to="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span>Home</span>
        </Link>
        <Link
          onClick={() => {
            store.updateNavegation("movies");
          }}
          className={store.navegation === "movies" ? 'item active' : 'item'}
          to="/movies">
          <FontAwesomeIcon icon={faFilm} className="icon" />
          <span>Movies</span>
        </Link>
        <Link
          onClick={() => {
            store.updateNavegation("favorites");
          }}
          className={store.navegation === "favorites" ? 'item active' : 'item'}
          to="/favorites">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span>Favorites</span>
        </Link>
        <Link
          onClick={() => {
            store.updateNavegation("lists");
          }}
          className={store.navegation === "lists" ? 'item active' : 'item'}
          to="/lists">
          <FontAwesomeIcon icon={faList} className="icon" />
          <span>My Lists</span>
        </Link>
        <Link
          className={store.navegation === "" ? 'item active' : 'item'}
          to="/login">
          <FontAwesomeIcon icon={faDoorOpen} className="icon" />
          <span>Log Out</span>
        </Link>
      </section>
    </section>
  ));
}

export default NavBar;