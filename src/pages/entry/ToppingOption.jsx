import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { ADD_TOPPINGS } from '../../redux/actions';
import './styles/sundae-option.scss';

const mapDispatchToProps = dispatch => {
  return {
    addToppings: number => dispatch({ type: ADD_TOPPINGS, payload: { number } })
  };
};

function ToppingOption({ name, imgSrc, addToppings }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    addToppings(checked ? -1 : 1);
    setChecked(!checked);
  };

  return (
    <Col lg={3} md={4} sm={6} xs={12} className="sundae-option topping-option">
      <img src={imgSrc} alt={`${name} topping`} />
      <Form.Group controlId={`checkbox-${name}`}>
        <Form.Check onChange={handleChange} checked={checked} label={name} />
      </Form.Group>
    </Col>
  );
}

export default connect(null, mapDispatchToProps)(ToppingOption);
