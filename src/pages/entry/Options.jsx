import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

function Options({ optionType }) {
  const [items, setItems] = useState([]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  useEffect(() => {
    fetch(`/${optionType}`)
      .then(resp => resp.json())
      .then(json => setItems(json));
  }, [optionType]);

  return (
    <div className="options">
      <Row>
        {items.map(item => (
          <ItemComponent
            key={item.name}
            name={item.name}
            imgSrc={item.imagePath}
          />
        ))}
      </Row>
    </div>
  );
}

export default Options;
