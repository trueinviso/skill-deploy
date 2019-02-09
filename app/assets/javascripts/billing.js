function togglePaymentForm() {
  const summary = document.getElementsByClassName("card-summary")[0]
  const details = document.getElementsByClassName("card-details")[0]

  if(summary.style.display === "none") {
    summary.style.display = "block";
    details.style.display = "none";
  } else {
    summary.style.display = "none";
    details.style.display = "block";
  }
}
