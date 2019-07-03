import React from 'react';

class Filter extends React.Component {
  constructor(props){
    super(props)

  }

  radioChange = (e) => {
    console.log(e.currentTarget.id)
    // console.log(this)
    this.props.filterCheck = e.currentTarget.id;
  }

  render(){ 
    return (
      <div className='checkBoxWrapper'> <span>Display:</span>
        {/* <legend>display:</legend> */}
        {/* <label for="all">All</label>
        <input type="radio" name="display" id="all" checked/>

        <label for="unread">Unread only</label>
        <input type="radio" name="display" id="unread"/>
        <label for="read">Read only</label>
        <input type="radio" name="display" id="read"/> */}

        <label for="all">All</label>
        <input type="radio" id="all" name="display" onChange={this.radioChange} defaultChecked />

        <label for="read">Read only</label>
        <input type="radio" id="read" name="display" onChange={this.radioChange}  />
        <label for="unread">Unread only</label>
        <input type="radio" id="unread" name="display" onChange={this.radioChange}  />
      </div>

    )
  }
}

export default Filter