import React from 'react';  
import './style.css';  

class Popup extends React.Component {
  
  
  render() {  
    // Creating deep copies of the props 
    let wpm = JSON.parse(JSON.stringify(this.props.wpm));
    let cpm = JSON.parse(JSON.stringify(this.props.cpm));
    let acc = JSON.parse(JSON.stringify(this.props.acc));

    return (  
        <div className='popup'>  
        <div className='popup\_inner'>  
        <h1>Score: {wpm} WPM, {cpm} CPM, {acc}% ACC</h1> 
        <button onClick={this.props.closePopup}>Try Again</button>  
        </div>  
        </div>  );  
  }  
}  

export default Popup;