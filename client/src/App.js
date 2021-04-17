import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import FundraiserCard from './components/fundraiserCard';

function App() {
  const cards = [
    {
      name: 'Fundraiser 1',
      price: '10',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus dignissim nibh id efficitur. Cras consectetur ac neque vel ornare. Curabitur rutrum ultrices tellus, nec malesuada purus cursus vel. Cras facilisis ut est vel auctor. Ut a elit suscipit, molestie leo vel, imperdiet neque. Praesent facilisis sem augue, quis aliquam eros hendrerit ac. In efficitur, massa in lobortis vehicula, lorem sem condimentum sapien, id vehicula elit risus et sem.',
      showPay: false,
    },
    {
      name: 'fundraiser2',
      price: '20',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus dignissim nibh id efficitur. Cras consectetur ac neque vel ornare. Curabitur rutrum ultrices tellus, nec malesuada purus cursus vel. Cras facilisis ut est vel auctor. Ut a elit suscipit, molestie leo vel, imperdiet neque. Praesent facilisis sem augue, quis aliquam eros hendrerit ac. In efficitur, massa in lobortis vehicula, lorem sem condimentum sapien, id vehicula elit risus et sem.',
      showPay: true,
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <FundraiserCard cards={cards} />
      </header>
    </div>
  );
}

export default App;
