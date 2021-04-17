import React, { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {
  InputAdornment,
  makeStyles,
  Input,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    margin: 12,
  },
});
function InputPrice({ card }) {
  const [showpay, setShowpay] = useState(false);
  const [price, setPrice] = useState('');
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleClick = () => {
    setShowpay(!showpay);
  };
  const handlePayment = (token) => {
    const body = {
      token,
      product: card,
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

  const classes = useStyles();
  return (
    <CardActions className={classes.button}>
      <Button size="large" color="primary" onClick={handleClick}>
        Donate
      </Button>
      {showpay && (
        <>
          <Input
            value={price}
            onChange={handleChange}
            id="standard-adornment-weight"
            className={classes.input}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            inputProps={{
              'aria-label': 'Price',
            }}
          />
          <StripeCheckout
            token={handlePayment}
            stripeKey="pk_test_51IgnbRSEzonCch7wz83bXjrnawUmo3q9B9lCE7QbX6gXWKOyzjiFmBlcbCc9BAo4BPUQogQrp71uA0syj8QhYmaS00oBjQBlPm"
            name={card.name}
            amount={price * 100}
          />
        </>
      )}
    </CardActions>
  );
}

export default InputPrice;
