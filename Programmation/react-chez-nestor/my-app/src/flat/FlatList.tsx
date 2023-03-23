import { Flat } from './Flat';
import { useState } from 'react';
import FlatView from './FlatView';

interface Props {
  flats: Flat[];
}

function FlatList({ flats }: Props) {

  const [sortBy] = useState<string>('price');

  const sortedFlats = flats.sort((a, b) => {
    if (sortBy === 'price') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  const [selectedFlat, setSelectedFlat] = useState<Flat | null>(null);

  const handleFlatClick = (flat: Flat) => {
    setSelectedFlat(flat);
  };

  return (
    <div className='flat--global'>
      {selectedFlat ? (
        <div className="flat--selected">
          <h1>{selectedFlat.name}</h1>
          <div className="flat--p">
            <p>Localisation : {selectedFlat.location}</p>
            <p>Prix : ${selectedFlat.price} par nuit</p>
          </div>
          <img src={selectedFlat.picture} className="flat--img"></img>
        </div>
      ) : (
        <>
          <h1>List of Flats</h1>
          <div className="flat--list">
            {sortedFlats.map((flat) => (
              <div
                key={flat.id}
                className="flat--card"
                onClick={() => handleFlatClick(flat)}
              >
                <h2>{flat.name}</h2>
                <div className="flat--p">
                  <p>Localisation : {flat.location}</p>
                  <p>Prix : ${flat.price} par nuit</p>
                </div>
                <img src={flat.picture} className="flat--img"></img>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FlatList;
