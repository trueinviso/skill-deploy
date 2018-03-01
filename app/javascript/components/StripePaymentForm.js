import React from 'react'
import { Elements } from 'react-stripe-elements'
import InjectedPaymentForm from './PaymentForm'


class StripePaymentForm extends React.Component {
  render(){
    return(
      <Elements>
        <InjectedPaymentForm />
      </Elements>
    );
  }
}

export default StripePaymentForm
