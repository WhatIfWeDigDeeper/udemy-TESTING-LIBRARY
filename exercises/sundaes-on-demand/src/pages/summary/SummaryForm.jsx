import React from 'react';

export const SummaryForm = () => {
  return (
    <div>
      <h1>Summary Form</h1>

      <input
        id='terms-and-conditions-checkbox'
        type='checkbox'
      />
      <label htmlFor='terms-and-conditions-checkbox'>Terms and Conditions</label>
      <button
        type='button'
      >Confirm Order</button>
    </div>
  );
}
