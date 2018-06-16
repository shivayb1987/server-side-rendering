const React = require('react')
const ReactRouter = require('react-router')
const Router = ReactRouter.Router
// const hasHistory = ReactRouter.hasHistory
const browserHistory = React.browserHistory
const AsyncProps = require('async-props').default

const routesConfig = require('./routesConfig')

class Routes extends React.Component {
  render () {
    return (
    //   <Router history={hasHistory}>
    //     <Route path='/' component={AuthorsIndex} />
    //     <Route path='/author/:id' component={AuthorPage} />
    //     <Route path='*' component={NotFound} />
    //   </Router>
      <Router
        history={browserHistory}
        routes={routesConfig}
        render={(props) => <AsyncProps {...props} />}
        />
    )
  }
}

module.exports = Routes
