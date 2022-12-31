import React from 'react';

import { SummaryForm } from './SummaryForm';


export const OrderSummary = () => {
  return (
    <div>
      <h1>Order Summary</h1>
      <SummaryForm/>
      <input
        type='checkbox'
        name='terms and conditions'
      />
      <button
        type='button'
      >Confirm Order</button>
    </div>
  );
}
