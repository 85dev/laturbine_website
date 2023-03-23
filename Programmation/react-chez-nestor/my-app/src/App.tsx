import { useState, useEffect } from 'react';
import FlatList from './flat/FlatList';
import { Flat } from './flat/Flat';
import flatsData from './flats.json';

function App() {
  const [flats, setFlats] = useState<Flat[]>([]);

  useEffect(() => {
    setFlats(flatsData);
  }, []);

  return <FlatList flats={flats} />;
}

export default App;
