import OrderSummary from './pages/summary/OrderSummary';
import { Col, Container, Row } from 'react-bootstrap';
import OrderEntry from './pages/entry/OrderEntry';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12}>
            <OrderEntry />
            <OrderSummary />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
