import React, { useState, useEffect } from 'react';
import './App.css';
import questions from './assets/questions.js';
import Button from 'react-bootstrap/Button';
import QAblock from './components/QAblock';
import Layout from './components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// app components fetches API data via useEffect() and getData().
// it also gets the chosen answers from the six invoked QAblock components
// writes them to 'userAnswers'.
// then it checks if all answers are selected and then changes the color of 'Submit' button.
// on 'Submit' it calls checkAnswers()

function App() {
  const baseURL = 'https://wd40-trivia.onrender.com/api/questions';
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(false);

  const checkAnswers = () => {
    if (userAnswers.length === data.length) {
      userAnswers.forEach((item, index) => {
        item.id === data[index].correctAnswer && setScore(score + 1);
      });
      setSubmit(true); // conditionally renders the second JSX block
    } else {
      alert('Please select six answers!');
    }
  };

  // FETCH DATA and save to data state variable
  async function getData() {
    try {
      const res = await fetch(baseURL);
      const apiData = await res.json();
      setData(apiData); // save data object
      console.log('data saved: ', apiData);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  // load data on MOUNT and reset userAnswers state,
  useEffect(() => {
    getData();
    setUserAnswers([]);
  }, [submit]);

  // ---------------------------------------------------------------- //
  // displaying the data from the state arrays

  return submit ? (
    // results page
    <>
      Your Score: {score}
      <br />
      {/* // showResults(score, data.forEach(item => item.correctAnswer); */}
      {data.map((item) => (
        <>
          <p>
            {item.question} <br />
            your answer: {item.userAnswer}
            <br />
            correct Answer: <b>{item.correctAnswer}</b>
          </p>
          <br />
        </>
      ))}
      <Button
        className="btn-success bg-secondary"
        size="md"
        onClick={() => setSubmit(false)}
      >
        Retry
      </Button>
    </>
  ) : (
    // start page
    <>
      <Layout />
      <Container fluid="lg" className="p-4 mb-4 bg-success rounded-4">
        <Row>
          <Col className="col-12 p-5 rounded-4">
            {data && (
              <ul>
                {/* {data.map((item) => ( */}
                  <QAblock
                    data={data}
                    setData={setData}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    userAnswers={userAnswers}
                    setUserAnswers={setUserAnswers}
                  />
                {/* ))} */}
              </ul>
            )}
            <Button
              className={
                userAnswers.length === data.length
                  ? 'btn-success bg-secondary'
                  : 'btn-success'
              }
              size="md"
              onClick={checkAnswers}
            >
              Submit Answers
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
