import Nav from 'react-bootstrap/Nav';

function Navigation() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">about</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">contact</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item> */}
      </Nav>
    </>
  );
}

export default Navigation;
