import React from 'react';

class Book extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isMouseInside: false
    }
    // this.clickEvent=this.clickEvent.bind(this)
  }
  
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
    // console.log(this.state.isMouseInside)
  }
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
    // console.log(this.state.isMouseInside)
  }
  // clickEvent(){
  //   console.log(this.props.index)
  // }
  handleClick = () => {
    console.log(this.props.index)
    const index =  this.props.index;
    this.props.handleDestroy(index)
  }

  render(){
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} className="bookWrapper">
        <img src={this.props.details.urlToImg} alt={this.props.details.name}/>
        <div className='bookDetailsTextWrapper' >
        {this.state.isMouseInside ?
          <div>
            <div className='bookDetailsText'>
              <h5>{this.props.details.name}</h5>
              <h6>{this.props.details.author}</h6>
            </div> 
            <div className='bookDetailsButton'>
              {/* <button className='delete' onClick={this.handleClick}>remove</button>  */}
              <span>edit</span>
              <span onClick={this.handleClick}> remove </span>
              <span>mark as read</span>
            </div>
          </div>
        : null}
      </div>
      </div>
    )
  }
}

export default Book;