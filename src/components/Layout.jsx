import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Nav';
import Tabs from './Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyToast from './MyToast';
// import Questions from './Questions';

const Layout = () => {
  return (
    <>
      <Container className="p-0">
        <Navigation />
        {/* <Tabs /> */}
        <Container
          fluid="lg"
          className="p-4 mb-4 bg-success rounded-4"
        >
          <Row>
            <Col className="col-12 p-5 rounded-4">
              {/* ////// */}
              <h1 className="header">The Trivia Quiz App</h1>
              {/* <MyToast>
                Click on the correct answer to each question.
                <br />
                Click 'submit' to reveal the correct answers and your score.
                <br />
                <br /> Click 'try again' to continue
              </MyToast> */}
              <ul id="questions-list"></ul>
              {/* ////// */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
