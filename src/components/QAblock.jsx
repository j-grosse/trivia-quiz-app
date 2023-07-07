import { useState } from 'react';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';

// this component displays a question and possible answers
// on click the background of the selected answer button is darkened

const QAblock = ({ data, setData, currentIndex, setCurrentIndex, userAnswers, setUserAnswers }) => {

  // add answer to userAnswers array in app.js
  // add userAnswer to data
  // count up currentIndex
  const handleAnswerSelection = (event) => {
    const userAnswer = event.target.innerHTML;
    event.target.className = userAnswer;
    setUserAnswers([...userAnswers, userAnswer]);
    updateData(currentIndex, userAnswer);
    setCurrentIndex(currentIndex + 1);
  };

  // invoked by the function above to save the userAnswer
  // called with the currentIndex and the userAnswer as parameters
  const updateData = (index, userAnswer) => {
    const updatedData = data.map((obj, i) => {
      if (i === index) {
        return { ...obj, userAnswer: userAnswer };
      } else {
        return data; // if nothing was updated
      }
    });
    setData(updatedData);
  };

  return (
    <>
      <div className="questions">
        {data[currentIndex].question && (
          <li key={currentIndex}>
            {'Question ' + currentIndex + 1 + ': '}
            {data[currentIndex].question}
          </li>
        )}
      </div>

      <div className="answers">
        {data[currentIndex].answers &&
          data[currentIndex].answers.map((choice) => (
            <li key={uuidv4()}>
              <button onClick={handleAnswerSelection}>{choice}</button>
            </li>
          ))}
      </div>

      <br />
    </>
  );
};

export default QAblock;
