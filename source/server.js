import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server'; //renderiza la aplicación a un string con el HTML

const requestHandler = (req, res) => {
    let html = renderToString(
        React.DOM.h1(null, 'Hola')
    );

    res.write(html);
    res.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
