import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Row } from 'react-bootstrap';

import { AlertBanner } from '../common/AlertBanner';
import { ScoopOption } from './ScoopOption';
import { ToppingOption } from './ToppingOption';

export function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null)

  // optionsType = 'scoops' | 'toppings'
  useEffect(() => {
    axios
     .get(`http://localhost:3030/${optionType}`)
     .then((response) => setItems(response.data))
     .catch((err) => {
        setError(err);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner message={error.message} />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) =>
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />);


  return (
    <Row>
      {optionItems}
    </Row>
  );
}
