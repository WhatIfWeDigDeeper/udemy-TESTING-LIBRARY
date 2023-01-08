import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


export const SummaryForm = () => {
  const [termsAndConditionsChecked, setTermsAndConditionsChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to the <span style={{ color: 'blue' }}>Terms and Conditions</span>
    </span>
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
