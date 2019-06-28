import React from 'react';


class AddBookForm extends React.Component{

  nameRef = React.createRef();
  authorRef = React.createRef();
  linkToImgRef = React.createRef();

  throwError = () => {
    if(!this.nameRef.current.value){
      this.nameRef.current.style.border='1px solid red'}
      if(!this.authorRef.current.value){
      this.authorRef.current.style.border='1px solid red'}

  }
  
  createBook = e => {
    e.preventDefault();
    if (this.nameRef.current.value && this.authorRef.current.value )
    {
      const cover = this.linkToImgRef.current.value ? this.linkToImgRef.current.value : 'http://www.mk.undp.org/etc/designs/UNDPGlobalDesign/clientlibs/digitallibrary/css/book-cover-placeholder.png'
    const book = {
      name : this.nameRef.current.value,
      author : this.authorRef.current.value,
      urlToImg : cover,
      index: `book${Date.now()}`
    }
    this.props.addBook(book);
    this.nameRef.current.value='';
    this.authorRef.current.value='';
    this.linkToImgRef.current.value='';
    this.nameRef.current.style.border='1px solid grey'
    this.authorRef.current.style.border='1px solid grey'
    this.linkToImgRef.current.style.border='1px solid grey'
    } else {
      if(!this.nameRef.current.value){
      this.nameRef.current.style.border='1px solid red'}
      if(!this.authorRef.current.value){
      this.authorRef.current.style.border='1px solid red'}
      if(!this.linkToImgRef.current.value){
      this.linkToImgRef.current.style.border='1px solid red'}
    }
  }
  

  render() {
    return (
      <div className='addBookFormWrapper'>
      	<form onSubmit={this.createBook}>
      	  <input placeholder='title' ref={this.nameRef} type="text"/>
      	  <input placeholder='author' ref={this.authorRef}type="text"/>
      	  <input placeholder='image URL' ref={this.linkToImgRef} type="text"/>
      	  <button type="submit">+ add book</button>
      	</form>
        <p className='error hidden'>enter book name and author</p>
      </div>
    )
  }
}
export default AddBookForm;