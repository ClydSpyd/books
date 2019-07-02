import React from 'react';


class BookDeetz extends React.Component{

  nameRefB = React.createRef();
  authorRefB = React.createRef();
  linkToImgRefB = React.createRef();

   handleClick = () => {
    const deetz = this.props.deetz
    this.props.submitForm(deetz)
   }

  handleSubmit= (e) => {
    e.preventDefault()
    const deetz = this.props.deetz;
    if (this.linkToImgRefB.current.value) (deetz.urlToImg = this.linkToImgRefB.current.value);
    if (this.nameRefB.current.value) (deetz.name = this.nameRefB.current.value);
    if (this.authorRefB.current.value) (deetz.author = this.authorRefB.current.value);
    console.log(deetz)
    this.props.submitForm(deetz)
    this.linkToImgRefB.current.value=''

    
    // this.linkToImgRefB.current.value === true ? console.log(this.linkToImgRefB.current.value) : null;
    // this.props.submitForm(this.props.deetz);
   
  }

  

  render(){
    return (
      <div className='bookDeetzWrapper'>
      	<form className = 'editForm' onSubmit={this.createBook}>
      	  <input defaultValue={this.props.deetz.name} ref={this.nameRefB} type="text"/>
      	  <input defaultValue={this.props.deetz.author} ref={this.authorRefB}type="text"/>
      	  <input defaultValue='enter new image URL' ref={this.linkToImgRefB} type="text"/>
      	  <button onClick={this.handleSubmit} >update</button>
          <p className='formCancel' onClick={this.props.cancelForm}>cancel</p>
      	</form>
        <p className='error hidden'>enter book name and author</p>
      </div>
    )
  }
}
export default BookDeetz;