import React from 'react';
import axios from 'axios';
import ListScores from './ListScores';
import Button from '@material-ui/core/Button';
import refresh from '../assets/refresh.png'

class Leaderboard extends React.Component {
  state = {
    scores: []
  }

  componentDidMount(){
    this.getScores();
  }

  getScores = () => {
    axios.get('/api/scores/leaderboard')
      .then(res => {
        if (res.data) {
          this.setState({
            scores: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteScore = (id) => {
    axios.delete(`/api/scores/${id}`)
      .then(res => {
        if (res.data) {
          this.getScores()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { scores } = this.state;
    return (
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <Button onClick={this.getScores}><img src={refresh} alt="refresh"/></Button>
        <ListScores scores={scores} deleteScore={this.deleteScore}></ListScores>
      </div>
    );
  }
}

export default Leaderboard;