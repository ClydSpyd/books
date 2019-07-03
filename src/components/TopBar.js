import React from 'react';
// import Filter from './Filter'

class TopBar extends React.Component{

  radioChange = (e) => {
    console.log(e.currentTarget.id)
    const input = e.currentTarget.id
    // console.log(this)
    this.props.handleFilterCheck(input)
    // this.props.filterCheck = e.currentTarget.id;
  }

  filterTextValue = React.createRef();

  filterText = () => {
    const input = this.filterTextValue.current.value;
    this.props.handleFilter(input)
  }

render(){
  return (
    <div className="topWrapper">
        <div className='mainBar'>
      <div className="mainInnerWrapper">
          <div className='title'><i class="fas fa-book"></i><span>iShelf</span></div>
          <div className="searchbarWrapper">
            <input ref={this.filterTextValue} onChange={this.filterText} placeholder='search books' type="text" name="search" id="search" />
          </div>
          {/* <Search /> */}
          <div className='checkBoxWrapper'> <span>Display:</span>
            <label for="all">All</label>
            <input type="radio" id="all" name="display" onChange={this.radioChange} defaultChecked />
            <label for="read">Read only</label>
            <input type="radio" id="read" name="display" onChange={this.radioChange}  />
            <label for="unread">Unread only</label>
            <input type="radio" id="unread" name="display" onChange={this.radioChange}  />
        </div>
  
          {/* <input type="text" name="" className='searchbar'/> */}
        </div>
      </div>
    </div>
  )
}
}

export default TopBar;