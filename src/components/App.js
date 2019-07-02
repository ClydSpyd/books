import React from 'react';
import TopBar from './TopBar';
import Grid from './Grid';
// import bookSamples from './bookSamples'
import AddBookForm from './AddBookForm'
import  samples from './samplesTwo'


class App extends React.Component{
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this)
    this.handleReadChange = this.handleReadChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  state = {
    books: {},
    filterText: '',
  }

  addBook = (book) => {
    console.log(`name: ${book.name}`);
    console.log(`author: ${book.author}`);
    console.log(`urk: ${book.urlToImg}`);

    const books = {...this.state.books};
    
    books[book.index] = book;
    localStorage.setItem('books',JSON.stringify(books))
    this.setState({
      books
    })
  }

  handleDestroy(bookId) {
    const books = {...this.state.books};
    delete books[bookId]
    localStorage.setItem('books',JSON.stringify(books))
    this.setState({books})
    
    console.log('destroy')
  }

  handleReadChange(index){
    const book = this.state.books[index];
    // book.setState({read: true})
    book.read ? book.read = false : book.read = true;
    const books = {...this.state.books};
    localStorage.setItem('books',JSON.stringify(books))
    console.log(book)
  }
  handleUpdate () {
    const books = {...this.state.books};
    this.setState({books})
    localStorage.setItem('books',JSON.stringify(books))
  }

  handleFilter(input){
    this.setState(input)
  }

  componentDidMount(){
    
    const initialState = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : samples;
    
    // const initialState = JSON.parse(localStorage.getItem('books'))
    this.setState({books: initialState})
  }

  render(){
    return (
      <React.Fragment>
      <TopBar />
      <div className="lowerWrappr">
        <Grid handleReadChange={this.handleReadChange} handleDestroy={this.handleDestroy} loadSamples={this.loadSamples} books={this.state.books} handleUpdate={this.handleUpdate}/>
        <AddBookForm addBook={this.addBook}/>
      </div>
      </React.Fragment>
    )
  }
}

export default App;