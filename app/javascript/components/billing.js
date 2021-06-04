import attachEvent from "~/helpers/attachEvent";

function paymentForm() {
  const toggleButton = document.getElementById('change-payment-method')

  const togglePaymentForm = () => {
    const paymentForm = document.getElementById("braintree-payment-form")
    const cardSummary = document.getElementById("cardSummary")
    if (paymentForm.classList.contains("hidden")) {
      toggleButton.classList.toggle("hidden")
    }
    cardSummary.classList.toggle("hidden")
    paymentForm.classList.toggle("hidden")
  }

  const removePaymentFormEvent =  attachEvent(
      'click',
      togglePaymentForm,
      toggleButton
  )

  return function cleanup() {
    removePaymentFormEvent()
  }
}

export default paymentForm
