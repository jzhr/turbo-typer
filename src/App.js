import React from 'react';
import logo from './logo.svg';
import './App.css';
import {generate} from './utils/words';
import useKeyPress from './hooks/useKeyPress';
import { useState } from 'react';
import { currentTime } from './utils/time';

let initialWords = generate();
// console.log(initialWords);

function App() {
  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [typedChars, setTypedChars] = useState('');
  const [typoChars, setTypoChars] = useState('');
  
  useKeyPress(key => {
    if (!startTime) {
      setStartTime(currentTime());
    }

    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    if (key === currentChar) {
      if (incomingChars.charAt(0) === ' ') {
        setWordCount(wordCount + 1);
        const durationInMinutes = (currentTime() - startTime) / 60000.0;
        setWpm(((wordCount + 1) / durationInMinutes).toFixed(2));
        setCpm(((typedChars.length) / durationInMinutes).toFixed(2));
      }

      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }

      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      
   
      setCurrentChar(incomingChars.charAt(0));
      
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars +=' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);
    } else {
      if (currentChar !== ' ') {
        setTypoChars(typoChars + key);
      }
    }

    const updatedTypedChars = typedChars + key;
    setTypedChars(updatedTypedChars);
    setAccuracy(
      ((updatedOutgoingChars.length * 100) / updatedTypedChars.length).toFixed(
        2,
      ),
    );
  });

  function handleReset() {
    initialWords = generate();
    setStartTime();
    setTypedChars('');
    setWordCount(0);
    setWpm(0);
    setCpm(0);
    setAccuracy(0);
    setOutgoingChars('');
    setIncomingChars(initialWords.substr(1));
    setCurrentChar(initialWords.charAt(0));
    setTypoChars('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="Character">
          <span className="Character-out">
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          <span className="Character-current">{currentChar}</span>
          <span>{incomingChars.substr(0, 20)}</span>
        </p>
        <h3>
          WPM: {wpm} | CPM: {cpm} | ACC: {accuracy}% 
        </h3>
        <h3 className="Typo">{typoChars}</h3>
        <button onClick={handleReset}>
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
