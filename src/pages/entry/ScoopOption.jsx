import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import './styles/sundae-option.scss';

function ScoopOption({ name, imgSrc }) {
  const [num, setNum] = useState(0);

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="sundae-option scoop-option">
      <img src={imgSrc} alt={`${name} scoop`} />
      <Form.Group>
        <Form.Label>{name}</Form.Label>
        <Form.Control
          type="number"
          onChange={e => setNum(e.target.value)}
          value={num}
        />
      </Form.Group>
    </Col>
  );
}

export default ScoopOption;
