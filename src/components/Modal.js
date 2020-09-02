import React from 'react';  
import './style.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import axios from 'axios';

class Popup extends React.Component {

  state = {
    // Creating deep copies of the props 
    wpm: JSON.parse(JSON.stringify(this.props.wpm)),
    cpm: JSON.parse(JSON.stringify(this.props.cpm)),
    acc: JSON.parse(JSON.stringify(this.props.acc))
  }

  theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

  // Function to add new scores to db
  addScore = () => {
    const newScore = {score: this.state.cpm};
    
    if (newScore && newScore.score.length > 0) {
      axios.post('/api/scores', newScore)
        .then(res => {
          if (res.data){
            console.log("Added new score")
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log("Input field required")
    }

    this.props.closePopup();
  }

  render() {  
    return (  
        <div className='popup'>  
          <div className='popup\_inner'>  
            <h1>{this.state.wpm} WPM, {this.state.cpm} CPM, {this.state.acc}% ACC</h1> 
            <ThemeProvider theme={this.theme}>
              <Box display='inline' m={3}><Button variant="contained" color="primary" onClick={this.props.closePopup}>Try Again</Button></Box>
              <Box display='inline' m={3}><Button variant="contained" color="primary" onClick={() => this.addScore()}>Add to Leaderboard</Button></Box>  
            </ThemeProvider>
          </div>  
        </div>  );  
  }  
}  

export default Popup;