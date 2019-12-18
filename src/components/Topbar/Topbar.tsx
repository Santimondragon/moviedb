import React from 'react';
import "./Topbar.scss";
import { faSearch, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


function Topbar() {
    return (
      <section id="topbar">
        <Link className="logo" to="/"><img src="" alt="Logo"/></Link>
        <article className="searchBar">
          <input id="homeSearch" type="text" placeholder="¿What are you looking for?" />
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </article>
        <FontAwesomeIcon icon={faBell} className="notification" />
      </section>
    );
}

export default Topbar;