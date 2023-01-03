import React, { useState } from 'react';

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <h1>Summary Form</h1>

      <input
        id='terms-and-conditions-checkbox'
        type='checkbox'
        onChange={(e) => setDisabled(!e.target.checked)}
      />
      <label htmlFor='terms-and-conditions-checkbox'>Terms and Conditions</label>
      <button
        disabled={disabled}
      >Confirm Order</button>
    </div>
  );
}
