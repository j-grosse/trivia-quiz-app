import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const MyToast = ({ children }) => {
  const [show, toggleShow] = useState(false);
  return (
    <>
      {!show && (
        <Button
          className="btn-danger"
          size="md"
          onClick={() => toggleShow(true)}
        >
          read instructions
        </Button>
      )}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Instructions</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export default MyToast;
