import React from 'react';
import Book from './Book'
import BookDeetz from './bookDeetz'

class Grid extends React.Component{
  constructor(props){
    super(props);
    this.state= {
    formCurrent: {},
    formBookIndex: 1,
  }
}

  showForm = (index) => {
    const deetz = this.props.books[index]
    this.setState({formBookIndex: index})
    // console.log(deetz)
    this.setState({formCurrent : deetz})
    document.getElementById('bookDeetz').className='visible'
  }
  
  submitForm = (deetz) => {
    
    console.log(deetz)
    console.log(this.props.books[this.state.formBookIndex])
    document.getElementById('bookDeetz').className='hidden'
    this.props.handleUpdate()

    // if (this.linkToImgRefB.current.value){
    //   console.log(this.linkToImgRefB.current.value)
    //   this.props.deetz.urlToImg= this.linkToImgRefB.current.value
    }
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.submitForm(deetz);
  //   // const book = this

  // }

cancelForm = () => {
  document.getElementById('bookDeetz').className='hidden'
}

  render(){
    return (
      <div className="gridWrapper">
        <div className="hidden" id='bookDeetz'>
          <BookDeetz showForm={this.showForm} submitForm={this.submitForm} cancelForm={this.cancelForm} deetz={this.state.formCurrent}/>
        </div>
        {Object.keys(this.props.books).map(k => 
        <Book 
        key={k} 
        index={k}
        details={this.props.books[k]}
        handleDestroy={this.props.handleDestroy} 
        handleReadChange={this.props.handleReadChange}
        showForm={this.showForm}
        formCurrent={this.state.formCurrent}
        />)}
      </div>
    )
  }
}

export default Grid