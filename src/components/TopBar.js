import React from 'react';

class TopBar extends React.Component{
render(){
  return (
    <div className="topWrapper">
      <div className='title'><i className="fas fa-book"></i><span>iShelf</span></div>
      <div className='mainBar'>
        {/* <Search />
        <Filter /> */}
        {/* <input type="text" name="" className='searchbar'/> */}
      </div>
    </div>
  )
}
}

export default TopBar;