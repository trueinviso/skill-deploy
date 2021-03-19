function togglePaymentForm(e) {
  const paymentForm = document.getElementById("braintree-payment-form")
  const cardSummary = document.getElementById("cardSummary")
  if (paymentForm.classList.contains("hidden")) {
    e.innerHTML = "Close edit information"
  } else {
    e.innerHTML = "Edit my information"
  }
  cardSummary.classList.toggle("hidden")
  paymentForm.classList.toggle("hidden")
}
