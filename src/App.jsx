import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Nav';
import Tabs from './components/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyToast from './components/MyToast';
import Questions from './components/Questions';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container className="p-0">
        <Navigation />
        {/* <Tabs /> */}
        <Container
          fluid="lg"
          className="p-4 mb-4 bg-secondary-subtle rounded-4"
        >
          <Row>
            <Col className="col-12">
              {/* ////// */}
              <h1 className="header">The Trivia Quiz App</h1>
              <MyToast>
                Click on the correct answer to each question.
                <br />
                Click 'submit' to reveal the correct answers and your score.
                <br />
                <br /> Click 'try again' to continue
              </MyToast>
              <ul id="questions-list"></ul>
              <Questions />
              {/* ////// */}
            </Col>
          </Row>
        </Container>
      </Container>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
