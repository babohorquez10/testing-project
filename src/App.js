import OrderSummary from './pages/summary/OrderSummary';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
