import React from 'react';

import AddItem from './components/AddItem/AddItem';
import CheckedItems from './components/CheckedItems/CheckedItems';

import ItemProvider from './contexts/ItemContext';
import UncheckedItems from './components/UncheckedItems/UncheckedItems';

import './App.css';

function App() {  
  return (
    <div className='container'>
      <ItemProvider>
          <UncheckedItems />
          <AddItem />
          <CheckedItems />
      </ItemProvider>
    </div>
  )
}

export default App;
