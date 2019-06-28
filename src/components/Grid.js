import React from 'react';
import Book from './Book'

class Grid extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="gridWrapper">
        {Object.keys(this.props.books).map(k => 
        <Book 
        key={k} 
        index={k}
        details={this.props.books[k]}
        handleDestroy={this.props.handleDestroy} />)}
      </div>
    )
  }
}

export default Grid