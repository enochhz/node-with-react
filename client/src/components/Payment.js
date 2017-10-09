import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extedns Component {
  reunder() {
    debugger;
    return (
      <StripeCheckout
        amount={500}
        token={token => concole.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
