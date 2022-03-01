import React, { useState } from 'react';
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';

function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const popover = (
    <Popover id="termsandconditions-popover">
      <Popover.Body>Popover terms and conditions</Popover.Body>
    </Popover>
  );

  const label = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
          label={label}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!checked}>
        Confirm order
      </Button>
    </Form>
  );
}

export default SummaryForm;
