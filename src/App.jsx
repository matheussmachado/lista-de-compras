import React from 'react';

import AddItem from './components/AddItem/AddItem';
import CheckedItems from './components/CheckedItems/CheckedItems';
import UncheckedItems from './components/UncheckedItems/UncheckedItems';
import CheckedItemsOptions from './components/CheckedItemsOptions/CheckedItemsOptions';

import ItemProvider from './contexts/ItemContext';

import './App.css';

function App() {  
  return (
    <div className='container'>
      <ItemProvider>
          <UncheckedItems />
          <AddItem />
          <CheckedItems />
          <CheckedItemsOptions />
      </ItemProvider>
    </div>
  )
}

export default App;
