const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_...');

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/payment', (req, res) => {
  const { product, token } = req.body;
  console.log(product);
  const idempontencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      console.log(customer.id);
        stripe.charges.create({
            amount:product.price *100,
            currency:usd,
            customer:customer.id,
            receipt_email:token.email,
            description:product.name,
        },{idempontencyKey})
    }).then(result=>res.status(200).json(result))
    .catch((error) => console.error(error));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
