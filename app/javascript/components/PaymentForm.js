import React from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'


class PaymentForm extends React.Component {
  handleSubmit = (e) => {
    const form = document.querySelector('#stripe-payment-form');
    const submit = document.querySelector('input[type="submit"]');

    e.preventDefault()
    if(submit) submit.disabled = true
    this.props.stripe.createToken({ name: 'Keith Ward' }).then(({token}) => {
      console.log(token)
      const sourceElement = document.getElementById("source")
      sourceElement.value = token.id
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
        <input type="hidden" name="source" id="source" />
        <CardSection />
      </div>
    );
  }
}

function CardSection() {
  return <CardElement />
}

export default injectStripe(PaymentForm)
