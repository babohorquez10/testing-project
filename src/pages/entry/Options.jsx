import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AlertBanner from './AlertBanner';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  useEffect(() => {
    fetch(`/${optionType}`)
      .then(resp => resp.json())
      .then(json => setItems(json))
      .catch(err => setError(true));
  }, [optionType]);

  return (
    <div className="options">
      <Row>
        {error ? (
          <AlertBanner details={optionType} />
        ) : (
          items.map(item => (
            <ItemComponent
              key={item.name}
              name={item.name}
              imgSrc={item.imagePath}
            />
          ))
        )}
      </Row>
    </div>
  );
}

export default Options;
