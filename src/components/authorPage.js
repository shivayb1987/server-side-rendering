const React = require('react')
const Link = require('react-router').Link
// const Authors = require('./Authors')
const xhrClient = require('../xhrClient')

class AuthorPage extends React.Component {
  static loadProps (context, cb) {
    xhrClient.get(`/authors/${context.params.id}`)
    .then(response => {
      const author = response.data
      cb(null, author)
    })
    .catch(null, error => cb(error))
  }
  render () {
    // const author = Authors[this.props.params.id]
    return (
      <div>
        <h2>`${this.props.author.name}'s Major Works`</h2>
        <ul>
          {
            this.props.author.books.map((book, index) => <li key={index}>{book}</li>)
          }
        </ul>
        <Link to='/'>Go back to index</Link>
      </div>
    )
  }
}

module.exports = AuthorPage
