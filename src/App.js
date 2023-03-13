import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';


function App()
{
  return (

    <Container fluid>
      <Row className="viewport-height">
        <Col sm={4} className="align-items-center  d-flex">
          <Sidebar />
        </Col>
        <Col sm={8} className="align-items-center  d-flex justify-content-center">
          <Content />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
