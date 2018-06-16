const React = require('react')
const Link = require('react-router').Link

const books = [
  'Dubliners',
  'A Portrait of the Artist as a Young Man',
  'Exiles and poetry',
  'Ulysses',
  'Finnegans Wake'
]

class JoyceBooks extends React.Component {
  render () {
    return (
      <div>
        <h2>James Joyce's Major Works</h2>
        <ul>
          {
            books.map((book, index) => <li key={index}>{book}</li>)
          }
        </ul>
        <Link to='/'>Go back to index</Link>
      </div>
    )
  }
}

module.exports = JoyceBooks
