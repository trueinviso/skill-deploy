import React from 'react'


class ShowPaymentFormLink extends React.Component {
  showForm = (e) => {
    e.preventDefault()

    const form = document.getElementById("stripe-payment-form");
    const hide = document.getElementsByClassName("card-details");

    form.style.display = "block";
    hide[0].style.display = "none";
  }

  render() {
    return(
      <div className="small-8 columns show-payment-form-link">
        <a href="#" onClick={this.showForm}>
          (
          <span className="change">change</span>
          )
        </a>
      </div>
    );
  }
}

export default ShowPaymentFormLink
