import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'https://wd40-trivia.onrender.com/api/questions';

/** In this component useEffect and useState are used to fetch data
 *  from an external API and manage the component's state.

The useEffect hook is used to fetch the data from the API when the component is mounted.
The empty dependency array [] passed to useEffect ensures that the effect only runs once
when the component is mounted.
When the (side)effect runs, it makes a GET request to the API using axios, and 
when the response is received, it updates the questions state using the 
setQuestions function. */

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState(0);
  const [retry, setRetry] = useState(0);

  // load correct answers
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setAnswers(res.data.map((q) => q.correctAnswer)))
      .catch((err) => console.error(err));

    setScore(score + 5);
  }, [submit]);

  // load questions
  useEffect(() => {
    console.log('load questions');
    axios
      .get(url)
      .then((res) => setQuestions(res.data.map((q) => q.question)))
      .catch((err) => console.error(err));
  }, [submit]);

  return submit ? (
    <>
      <p>
        <b>Score: {score}</b>
      </p>
      <ul>
        {answers.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <button onClick={() => setSubmit(false)}>Try again</button>
    </>
  ) : (
    <>
      <ul>
        {questions.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
      <button onClick={() => setSubmit(true)}>Submit</button>
    </>
  );
};

export default Questions;
