import React from 'react';

import { Col } from 'react-bootstrap';


export function ToppingOption({ name, imagePath}) {
  return (
    <Col>
      <img
        src={`https://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: '75%'}}
      />
    </Col>
  );
}
