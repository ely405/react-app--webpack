import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server'; //renderiza la aplicación a un string con el HTML

import {ServerRouter, createServerRenderContext} from 'react-router';

import Page from './pages/containers/Page.jsx';

const requestHandler = (req, res) => {
    const context = createServerRenderContext();

    let html = renderToString(
        <ServerRouter location={req.url} context={context}>
            <Pages/>
        </ServerRouter>
    );

    const result = context.getResult();

    response.setHeader('Content-Type', 'text/html');

    if(result.redirect){
        response.writeHead(301, {
            Location: result.redirect.pathname
        });
        response.end();
    }

    if(result.missed){
        response.writeHead(404);
        html= renderToString(
            <ServerRouter location={req.url} context={context}>
                <Pages/>
            </ServerRouter>
        )
    }

    res.write(html);
    res.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
