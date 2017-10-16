import React from 'react';
import {
    Match, //que tiene que hacer en cada ruta
    Miss, //que hacer cuando no encuentre una ruta (404)
    Link //para moverse entre cada una de las rutas
} from 'react-router';

import Home from './Home.jsx';
import About from './About.jsx';
import Error404 from './Error404.jsx';


const pages = ()=>{
    return(
        <main role="application">
            <Match
                pattern='/'
                exactly
                component={Home}
            />
            <Match
                pattern='/about'
                exactly
                component={About}
            />
            <Miss
                component={Error404}
            />
        </main>
    );
}