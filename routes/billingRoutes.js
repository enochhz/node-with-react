const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecrectKey);

module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    
  });
};
