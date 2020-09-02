import React from 'react';

const ListScores = ({ scores, deleteScore }) => {

  return (
    <ul>
      {
        scores && scores.length > 0 ? (
          scores.map(score => {
            return (
              <li key={score._id} onClick={() => deleteScore(score._id)}>{score.score} cpm</li>
            )
          })
        ) : (
          <li>No scores</li>
        )
      }
    </ul>
  )
}

export default ListScores;