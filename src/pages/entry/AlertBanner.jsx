import React from 'react';
import { Alert, Col } from 'react-bootstrap';

export default function AlertBanner({ details }) {
  const errMsg = details
    ? `${details[0].toUpperCase()}${details.slice(1)} error`
    : 'Error';

  return (
    <Col xs={12}>
      <Alert variant="danger">{errMsg}. Try again.</Alert>
    </Col>
  );
}
