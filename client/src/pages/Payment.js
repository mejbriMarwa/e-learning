import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
export default class Payment extends Component {
  render() {
    return (
      <div className="paypal-button-container">
        <PayPalButton
          amount="0.01"
          onSuccess={(details) => {
            alert("Transaction completed by " + details.payer.name.given_name);
          }}
        />
      </div>
    );
  }
}
