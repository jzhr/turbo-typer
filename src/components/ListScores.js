import React from 'react';

const ListScores = ({ scores, deleteScore }) => {

  return (
    <ul>
      {
        scores && scores.length > 0 ? (
          scores.map(score => {
            return (
              <li key={score._id}>{score.score} cpm</li>
              //onClick={() => deleteScore(score._id)}
            )
          })
        ) : (
          <li>No scores available</li>
        )
      }
    </ul>
  )
}

export default ListScores;