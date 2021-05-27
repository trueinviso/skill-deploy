function togglePaymentForm(e) {
  const paymentForm = document.getElementById("braintree-payment-form")
  const cardSummary = document.getElementById("cardSummary")
  if (paymentForm.classList.contains("hidden")) {
    e.classList.toggle("hidden")
  }
  cardSummary.classList.toggle("hidden")
  paymentForm.classList.toggle("hidden")
}
