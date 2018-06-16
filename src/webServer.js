const express = require('express')
const http = require('http')
const httpProxy = require('http-proxy')
const React = require('react')
const ReactDOM = require('react-dom/server')
const Router = require('react-router')
const routesConfig = require('./routesConfig')

const AsyncProps = require('async-props').default
const loadPropsOnServer = AsyncProps.loadPropsOnServer
const app = express()
const server = new http.Server(app)

const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001'
})

app.set('view engine', 'ejs')
app.use('/dist', express.static('dist'))
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: 'http://localhost:3001'})
})

app.get('*', (req, res, next) => {
  Router.match({
    routes: routesConfig, location: req.url
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.status(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      loadPropsOnServer(renderProps, {}, (error, asyncProps, scriptTag) => {
        const markup = ReactDOM.renderToString(<AsyncProps {...asyncProps} {...renderProps} />)
        res.render('index', {markup, scriptTag})
      })
    } else {
      res.status(404).send('Not Found')
    }
  })
})

server.listen(3000, err => {
  if (err) {
    return console.log(err)
  }
  console.info('Web Server running on http://localhost:3000')
})
