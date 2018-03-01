import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'


class PaymentForm extends React.Component {
  handleSubmit = (e) => {
    const form = document.querySelector('#stripe-payment-form');
    const submit = document.querySelector('input[type="submit"]');

    e.preventDefault()
    if(submit) submit.disabled = true
    this.props.stripe.createToken({ name: 'Keith Ward' }).then(({token}) => {
      const nonceElement = document.getElementById(
        "payment_method_nonce"
      )
      nonceElement.value = token.id
      form.submit()
    })
  }

  componentDidMount() {
    const form = document.querySelector('#stripe-payment-form');
    form.addEventListener('submit', this.handleSubmit)
  }

  render() {
    return(
      <div>
        <input type="hidden" name="payment_method_nonce" id="payment_method_nonce" />
        <CardSection />
      </div>
    );
  }
}

function CardSection() {
  return(
    <label>
      Card details
      <CardElement />
    </label>
  );
}

export default injectStripe(PaymentForm)
