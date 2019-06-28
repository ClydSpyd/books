import React from 'react';
import TopBar from './TopBar';
import Grid from './Grid';
import bookSamples from './bookSamples'
import AddBookForm from './AddBookForm'
import  samples2 from './samples2'


class App extends React.Component{
  constructor(props){
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this)
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

  handleFilter(input){
    this.setState(input)
  }

  componentDidMount(){
    
    const initialState = JSON.parse(localStorage.getItem('books')) ? JSON.parse(localStorage.getItem('books')) : bookSamples;
    
    // const initialState = JSON.parse(localStorage.getItem('books'))
    this.setState({books: initialState})
  }

  render(){
    return (
      <React.Fragment>
      <TopBar />
      <div className="lowerWrappr">
        <Grid handleDestroy={this.handleDestroy} loadSamples={this.loadSamples} books={this.state.books}/>
        <AddBookForm addBook={this.addBook}/>
      </div>
      </React.Fragment>
    )
  }
}

export default App;