import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [product, setProduct] = useState({
    name: 'Fundraiser 1',
    price: '10',
  });
  // setProduct(...product,{name:"fundraiser2", price:"20"})
  const handlePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      'Content-type': 'application/json',
    };

    return fetch('http://localhost:5000/payment', {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
      .then((res) => {
        const { status } = res;
        console.log(status);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StripeCheckout
          token={handlePayment}
          stripeKey="pk_test_51IgnbRSEzonCch7wz83bXjrnawUmo3q9B9lCE7QbX6gXWKOyzjiFmBlcbCc9BAo4BPUQogQrp71uA0syj8QhYmaS00oBjQBlPm"
          name={product.name}
          amount={product.price * 100}
        />
      </header>
    </div>
  );
}

export default App;
