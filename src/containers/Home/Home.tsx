import * as React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Favorites from '../../components/Favorites/Favorites';
import Movies from '../../components/Movies/Movies';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useObserver } from 'mobx-react';

import './Home.scss';
import Recomendation from '../../components/Recomendations/Recomendations';

function Home() {
    return useObserver(() => (
        <section id="home">
            <Topbar />
            <Recomendation />
            <Favorites />
            <Movies />
        </section>
    ));
}

export default Home;
