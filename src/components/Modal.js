import React from 'react';  
import './style.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Popup extends React.Component {
  
  render() {  
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#FFFFFF',
        },
        secondary: {
          main: '#11cb5f',
        },
      },
    });

    // Creating deep copies of the props 
    let wpm = JSON.parse(JSON.stringify(this.props.wpm));
    let cpm = JSON.parse(JSON.stringify(this.props.cpm));
    let acc = JSON.parse(JSON.stringify(this.props.acc));

    return (  
        <div className='popup'>  
          <div className='popup\_inner'>  
            <h1>Score: {wpm} WPM, {cpm} CPM, {acc}% ACC</h1> 
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary" onClick={this.props.closePopup}>Try Again</Button>  
            </ThemeProvider>
          </div>  
        </div>  );  
  }  
}  

export default Popup;