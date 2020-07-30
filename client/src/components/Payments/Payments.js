import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./Payments.css";
import * as actions from "../../store/actions/index";
import { useDispatch } from "react-redux";

const Payment = () => {
  const dispatch = useDispatch();
  const tokenData = (token) => dispatch(actions.handletoken(token));

  return (
    <StripeCheckout
      amount={50000}
      name="FeedBack"
      description="Add 500rs per credit"
      token={(token) => tokenData(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      currency="INR"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPFoyqHh1rOEfLBtqjZNtd2kzMTk6HNHJgOw&usqp=CAU"
    >
      <button className="btn-small">Pay to Add Credits</button>
    </StripeCheckout>
  );
};

export default Payment;
