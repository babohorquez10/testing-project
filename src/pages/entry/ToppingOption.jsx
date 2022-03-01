import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import './styles/sundae-option.scss';

function ToppingOption({ name, imgSrc }) {
  const [checked, setChecked] = useState(false);

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="sundae-option topping-option">
      <img src={imgSrc} alt={`${name} topping`} />
      <Form.Group controlId={`checkbox-${name}`}>
        <Form.Check
          onChange={() => setChecked(!checked)}
          checked={checked}
          label={name}
        />
      </Form.Group>
    </Col>
  );
}

export default ToppingOption;
