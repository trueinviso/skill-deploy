import React from 'react'
import { embedDropin } from './BraintreePaymentForm'
import heyfamFetch from '../helpers/heyfamFetch'

class PaymentForm extends React.Component {
  state = {
    isFetching: false,
  }

  componentDidMount() {
    embedDropin(this.props.token);
  }

  render() {
    return <CardDetails />
  }
}

function CardDetails() {
  return(
    <div>
      <Header title="Payment Details" />
      <CardNumber />
      <div className="row">
        <ExpirationMonth />
        <ExpirationYear />
        <CVV />
        <Instructions />
      </div>
      <HiddenNonceField />
    </div>
  );
}

function Header(props) {
  return(
    <div className="secondary-heading">
      {props.title}
    </div>
  );
}

function HiddenNonceField() {
  return(
    <input type="hidden" name="payment_method_nonce" id="payment_method_nonce" />
  );
}

function CardNumber() {
  return(
    <div className="row">
      <label className="label" htmlFor="card-number">Card Number</label>
      <div className="text-field" id="card-number"></div>
    </div>
  );
}

function ExpirationMonth() {
  return(
    <div className="small-4 columns text-field-padding">
      <label className="label" htmlFor="card-expire-month">Expiration Month</label>
      <div className="text-field" id="card-expire-month"></div>
    </div>
  );
}

function ExpirationYear() {
  return(
    <div className="small-4 columns text-field-padding">
      <label className="label" htmlFor="card-expire-year">Expiration Year</label>
      <div className="text-field" id="card-expire-year"></div>
    </div>
  );
}

function CVV() {
  return(
    <div className="small-4 columns text-field-padding cvv-padding">
      <label className="label" htmlFor="cvv-field">CVC - Security Code</label>
      <div className="text-field" id="cvv-field"></div>
    </div>
  );
}

function Instructions() {
  return(
    <div className="instructions last">
      We reserve the right to remove jobs at our discretion.  Aside from jobs
      we remove, listings can not be refunded.  All prices are USD.
    </div>
  );
}
export default PaymentForm
