import Express from 'express'
import { renderToString } from 'react-dom/server'
import ReactDOMServer from 'react-dom/server'
import React from 'react';
import { render } from 'react-dom';
import { StaticRouter, Route, Switch } from 'react-router-dom';

import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/Core/Error/NotFound';


function handleRender(req, res) {
console.log('in-h')
  // Render the component to a string
  const html = ReactDOMServer.renderToString(
      <StaticRouter>
      <App />
    </StaticRouter>
  )



  // Send the rendered page back to the client
  return res.send(renderFullPage(html, ''))
}

function renderFullPage(html, preloadedState) {
	console.log('in')
  return `
      ${html}
    `
}


const app = Express()
const port = 8001

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.get('*', handleRender)

console.log("bing")
app.listen(port)