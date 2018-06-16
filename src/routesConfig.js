const AuthorsIndex = require('.components/authorsIndex')
const AuthorPage = require('./components/AuthorPage')
const NotFound = require('./components/notFound')

const routesConfig = [
    {path: '/', component: AuthorsIndex},
    {path: '/author/:id', component: AuthorPage},
    {path: '*', component: NotFound}
]

module.exports = routesConfig
