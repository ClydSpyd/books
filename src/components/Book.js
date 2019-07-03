import React from 'react';

class Book extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMouseInside: false,
      isRead: this.props.details.read,
      deleting: false
    }
    this.handleEdit=this.handleEdit.bind(this)
  }
  
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
    this.setState({deleting:false});
  }

  handleClick = (e) => {
    const deetzWrapper = e.target.parentElement.parentElement.firstChild;
    deetzWrapper.className='bookDetailsText red';
    this.state.deleting === true ? this.setState({deleting:false}) : this.setState({deleting:true})
    this.state.deleting === true ? deetzWrapper.className='bookDetailsText cyan' : deetzWrapper.className='bookDetailsText red';
  }
  removeBook = () => {
    const index =  this.props.index;
    this.props.handleDestroy(index)
  }
  readChange = () => {
    this.state.isRead===false ?
    this.setState({isRead:true}):
    this.setState({isRead:false})
    const index =  this.props.index;
    this.props.handleReadChange(index);
  }
  handleEdit () {
    const index =  this.props.index;
    this.props.showForm(index)
  }
  

  render(){
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="bookWrapper">
        <img src={this.props.details.urlToImg} alt={this.props.details.name}/>
        <div className='bookDetailsTextWrapper' >

          {this.state.isMouseInside ?
          
          <React.Fragment>

            <div className='bookDetailsText cyan'>
            {
              this.state.deleting === true ? 
              <div onClick={this.removeBook} className='deleteDiv'>
                <i  className="fas fa-times-circle bookDelete"></i>
                <p  className='bookDeleteText'>DELETE?</p>
              </div>
              : <div>
                  <h5>{this.props.details.name}</h5>
                  <h6>{this.props.details.author}</h6>
              </div>
            }
              </div> 

              <div className='bookDetailsButton'>
                <span onClick={this.handleEdit}>edit</span>

                {this.state.deleting === false ? <span onClick={this.handleClick}> remove </span> : <span onClick={this.handleClick}> cancel </span>}
                
                {this.state.isRead===false ? <span onClick={this.readChange}>mark as read</span> :
                <span onClick={this.readChange}>mark as unread</span> }
              </div>
              <div className="spacer"></div>

            </React.Fragment>
            : null}

        {this.props.details.read && this.state.deleting===false ?
        // {this.props.details.read && this.state.deleting===false && this.props.filterCheck === 'all' ?
          <i class="fas fa-check-circle bookIsRead"></i>
          : null}

        

        </div>
      </div>
    )
  }
}

export default Book;