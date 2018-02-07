"use strict";

const BraintreePaymentForm  = (function() {
  // get javascript required for drop in
  function configureRequires() {
    const btClient = "https://js.braintreegateway.com/web/3.29.0/js/client.min";
    const hostedFields = "https://js.braintreegateway.com/web/3.29.0/js/hosted-fields.min";

    require.config({
      paths: {
        braintreeClient: btClient,
        hostedFields: hostedFields,
      }
    });
  }

  function styles() {
    return {
      input: {
        "font-size": "16px",
        "font-family": "sans-serif",
        color: "#181818",
      },
    };
  }

  function number() {
    return {
      selector: "#card-number",
      placeholder: "1234  4567  8910  9876",
    };
  }

  function expirationMonth() {
    return {
      selector: "#card-expire-month",
      placeholder: "12",
    };
  }

  function expirationYear() {
    return {
      selector: "#card-expire-year",
      placeholder: "2019",
    };
  }

  function cvv() {
    return {
      selector: "#cvv-field",
      placeholder: "CVV",
    };
  }

  function fields() {
    return {
      number: number(),
      expirationMonth: expirationMonth(),
      expirationYear: expirationYear(),
      cvv: cvv(),
    }
  }

  function embed_nonce(payload){
    const nonceElement = document.getElementById(
      "payment_method_nonce"
    )
    nonceElement.value = payload.nonce
  }

  function tokenizeHostedFields(hostedFieldsErr, hostedFieldsInstance) {
    const form = document.querySelector('#braintree-payment-form');
    const submit = document.querySelector('input[type="submit"]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
        if (tokenizeErr) {
          console.error(tokenizeErr);
          return;
        }
        embed_nonce(payload);
        if(submit) submit.disabled = true
        form.submit();
      });
    }, false);
  }

  function hostedFieldsCallback(hostedFieldsErr, hostedFieldsInstance) {
    if(hostedFieldsErr) {
      console.error(hostedFieldsErr);
      return;
    }
    tokenizeHostedFields(hostedFieldsErr, hostedFieldsInstance);
  }

  function createHostedFields(hostedFields, clientInstance) {
    return hostedFields.create(
      {
        client: clientInstance,
        styles: styles(),
        fields: fields(),
      }, hostedFieldsCallback
    );
  }

  // create drop in
  function embedDropin(token) {
    configureRequires();

    require(['braintreeClient', 'hostedFields'], (client, hostedFields) => {
      client.create({ authorization: token }, (err, clientInstance) => {
        if(err) {
          console.error(err);
          return;
        }
        createHostedFields(hostedFields, clientInstance)
      });
    });
  }

  return {
    embedDropin: embedDropin,
  };
})();
