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
	console.log('handle')
	const context = {}
  // Render the component to a string
  const html = ReactDOMServer.renderToString(
  	// To render routes from server side (use req)
		<StaticRouter context={context} location={req.url}>
			<App />
		</StaticRouter>
  )
  // Send the rendered page back to the client
  return res.send(renderFullPage(html, ''))
}

function renderFullPage(html, preloadedState) {
  return `
      ${html}
    `
}

const app = Express()
const port = 8080

//Serve static files
app.use('/static', Express.static('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(port)