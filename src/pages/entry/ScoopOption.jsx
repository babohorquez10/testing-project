import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ADD_SCOOPS } from '../../redux/actions';
import './styles/sundae-option.scss';

const mapDispatchToProps = dispatch => {
  return {
    addScoops: number => dispatch({ type: ADD_SCOOPS, payload: { number } })
  };
};

function ScoopOption({ name, imgSrc, addScoops }) {
  const [num, setNum] = useState(0);

  const handleChange = e => {
    const newNum = e.target.value;
    const updateNum = newNum - num;

    addScoops(updateNum);
    setNum(newNum);
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="sundae-option scoop-option">
      <img src={imgSrc} alt={`${name} scoop`} />
      <Form.Group controlId={`${name}-count`}>
        <Form.Label>{name}</Form.Label>
        <Form.Control type="number" onChange={handleChange} value={num} />
      </Form.Group>
    </Col>
  );
}

export default connect(null, mapDispatchToProps)(ScoopOption);
