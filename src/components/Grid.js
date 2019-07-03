import React from 'react';
import Book from './Book'
import BookDeetz from './bookDeetz'

class Grid extends React.Component{
  constructor(props){
    super(props);
    this.state= {
    formCurrent: {},
    // formBookIndex: 1,
  }
}

componentDidUpdate = () => {
  console.log('updated')
}

showForm = (index) => {
  const deetz = this.props.books[index]
  // this.setState({formBookIndex: index})
  this.setState({formCurrent : deetz})
  document.getElementById('bookDeetz').className='visible'
}
  
submitForm = (deetz) => {
  
  console.log(deetz)
  // console.log(this.props.books[this.state.formBookIndex])
  document.getElementById('bookDeetz').className='hidden'
  this.props.handleUpdate()
  }

cancelForm = () => {
  document.getElementById('bookDeetz').className='hidden'
}

render(){

  let arr = Object.keys(this.props.books).map((k) => this.props.books[k]);

  let booksToShow = [];
  
    arr.forEach((book) =>{
      if(book.read === true && this.props.filterCheck === 'read'
        && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)){
      booksToShow.push (book);
      } else if(book.read === false && this.props.filterCheck === 'unread'
        && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)){
      booksToShow.push (book);
      } else if (this.props.filterCheck==='all'
      && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)) {
      booksToShow.push (book)
      } 
    });

  return (
    <div className="gridWrapper">
      <div className="hidden" id='bookDeetz'>
        <BookDeetz showForm={this.showForm} submitForm={this.submitForm} cancelForm={this.cancelForm} deetz={this.state.formCurrent}/>
      </div>
      {booksToShow.map(book => {
        return (<Book 
        key={book.key} 
        index={book.index}
        details={book}
        handleDestroy={this.props.handleDestroy} 
        handleReadChange={this.props.handleReadChange}
        showForm={this.showForm}
        formCurrent={this.state.formCurrent}
        filterCheck={this.props.filterCheck}
        />)
      })}
    </div>
  )}
}

export default Grid


/////////////////////////////////
////////////////////////////////

// import React from 'react';
// import Book from './Book'
// import BookDeetz from './bookDeetz'

// class Grid extends React.Component{
//   constructor(props){
//     super(props);
//     this.state= {
//     formCurrent: {},
//     formBookIndex: 1,
//   }
// }

// componentDidUpdate = () => {
//   console.log('updated')
// }
// // componentDidMount = () => {
// // }

//   showForm = (index) => {
//     const deetz = this.props.books[index]
//     this.setState({formBookIndex: index})
//     // console.log(deetz)
//     this.setState({formCurrent : deetz})
//     document.getElementById('bookDeetz').className='visible'
//   }
  
//   submitForm = (deetz) => {
    
//     console.log(deetz)
//     console.log(this.props.books[this.state.formBookIndex])
//     document.getElementById('bookDeetz').className='hidden'
//     this.props.handleUpdate()

//     // if (this.linkToImgRefB.current.value){
//     //   console.log(this.linkToImgRefB.current.value)
//     //   this.props.deetz.urlToImg= this.linkToImgRefB.current.value
//     }


// cancelForm = () => {
//   document.getElementById('bookDeetz').className='hidden'
// }

//   render(){


//     let arr = Object.keys(this.props.books).map((k) => this.props.books[k]);


//     let booksToShow = [];
    
   
//       arr.forEach((book) =>{
//         // if (this.props.filterText && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)) {
//         //   booksToShow.push (
//         //     <Book 
//         //     key={book.key} 
//         //     index={book.index}
//         //     details={book}
//         //     handleDestroy={this.props.handleDestroy} 
//         //     handleReadChange={this.props.handleReadChange}
//         //     showForm={this.showForm}
//         //     formCurrent={this.state.formCurrent}
//         //     filterCheck={this.props.filterCheck}
//         //     />
//         //     );
//         // } else if (!this.props.filterText) {
//         //   booksToShow.push (
//         //     <Book 
//         //     key={book.key} 
//         //     index={book.index}
//         //     details={book}
//         //     handleDestroy={this.props.handleDestroy} 
//         //     handleReadChange={this.props.handleReadChange}
//         //     showForm={this.showForm}
//         //     formCurrent={this.state.formCurrent}
//         //     filterCheck={this.props.filterCheck}
//         //     />
//         //     );
//         // }

//       //   else {
//         if(book.read=== true && this.props.filterCheck === 'read'
//             && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)){
//       booksToShow.push (
//         <Book 
//         key={book.key} 
//         index={book.index}
//         details={book}
//         handleDestroy={this.props.handleDestroy} 
//         handleReadChange={this.props.handleReadChange}
//         showForm={this.showForm}
//         formCurrent={this.state.formCurrent}
//         filterCheck={this.props.filterCheck}
//         />
//         );
//       } else if(book.read=== false && this.props.filterCheck === 'unread'
//         && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)){
//       booksToShow.push (
//         <Book 
//         key={book.key} 
//         index={book.index}
//         details={book}
//         handleDestroy={this.props.handleDestroy} 
//         handleReadChange={this.props.handleReadChange}
//         showForm={this.showForm}
//         formCurrent={this.state.formCurrent}
//         filterCheck={this.props.filterCheck}
//         />
//         );
//       } else if (this.props.filterCheck==='all'
//       && (book.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1 || book.author.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)) {
//         booksToShow.push (
//           <Book 
//           key={book.key} 
//           index={book.index}
//           details={book}
//           handleDestroy={this.props.handleDestroy} 
//           handleReadChange={this.props.handleReadChange}
//           showForm={this.showForm}
//           formCurrent={this.state.formCurrent}
//           filterCheck={this.props.filterCheck}/
//           >)
//       } 
//       })

//     return (
//       <div className="gridWrapper">
//         <div className="hidden" id='bookDeetz'>
//           <BookDeetz showForm={this.showForm} submitForm={this.submitForm} cancelForm={this.cancelForm} deetz={this.state.formCurrent}/>
//         </div>
//         {booksToShow}
//       </div>
//     )
//   }
// }

// export default Grid





/////////////////////////////////////////////////




// import React from 'react';
// import Book from './Book'
// import BookDeetz from './bookDeetz'

// class Grid extends React.Component{
//   constructor(props){
//     super(props);
//     this.state= {
//     formCurrent: {},
//     formBookIndex: 1,
//   }
// }

//   showForm = (index) => {
//     const deetz = this.props.books[index]
//     this.setState({formBookIndex: index})
//     // console.log(deetz)
//     this.setState({formCurrent : deetz})
//     document.getElementById('bookDeetz').className='visible'
//   }
  
//   submitForm = (deetz) => {
    
//     console.log(deetz)
//     console.log(this.props.books[this.state.formBookIndex])
//     document.getElementById('bookDeetz').className='hidden'
//     this.props.handleUpdate()

//     // if (this.linkToImgRefB.current.value){
//     //   console.log(this.linkToImgRefB.current.value)
//     //   this.props.deetz.urlToImg= this.linkToImgRefB.current.value
//     }
//   // }

//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   this.submitForm(deetz);
//   //   // const book = this

//   // }

// cancelForm = () => {
//   document.getElementById('bookDeetz').className='hidden'
// }

//   render(){
    
//     return (
//       <div className="gridWrapper">
//         <div className="hidden" id='bookDeetz'>
//           <BookDeetz showForm={this.showForm} submitForm={this.submitForm} cancelForm={this.cancelForm} deetz={this.state.formCurrent}/>
//         </div>
//         {Object.keys(this.props.books).map(k => 
//         <Book 
//         key={k} 
//         index={k}
//         details={this.props.books[k]}
//         handleDestroy={this.props.handleDestroy} 
//         handleReadChange={this.props.handleReadChange}
//         showForm={this.showForm}
//         formCurrent={this.state.formCurrent}
//         />)}
//       </div>
//     )
//   }
// }

// export default Grid