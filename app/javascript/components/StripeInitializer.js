import React from 'react'
import { StripeProvider } from 'react-stripe-elements'
import StripePaymentForm from './StripePaymentForm'

function StripeInitializer({ apiKey }) {
  return(
      <StripeProvider apiKey={ apiKey }>
        <StripePaymentForm />
      </StripeProvider>
  );
}

export default StripeInitializer
