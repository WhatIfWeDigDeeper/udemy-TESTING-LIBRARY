import React, { useState } from 'react';
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';

export const SummaryForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        No ice cream will actually be delivered
      </Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <OverlayTrigger placement="right" overlay={popover}>
      <span>
        I agree to the <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </span>
    </OverlayTrigger>
  );
  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check
          type='checkbox'
          checked={termsAndConditionsChecked}
          onChange={(e) => setTermsAndConditionsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>

      <h1>Summary Form</h1>
      <Button
        variant='primary'
        type='submit'
        disabled={!termsAndConditionsChecked}
      >
        Confirm Order
      </Button>
    </Form>
  );
}
