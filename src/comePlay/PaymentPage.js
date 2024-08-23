import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import "./PaymentPage.css";

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(state.rate);

  const additionalCosts = {
    "Personal Coach": 50,
    "Clothes": 20,
    "Food": 30,
  };

  const handleFeatureChange = (event) => {
    const feature = event.target.value;
    if (event.target.checked) {
      setTotalAmount((prevTotal) => prevTotal + additionalCosts[feature]);
    } else {
      setTotalAmount((prevTotal) => prevTotal - additionalCosts[feature]);
    }
  };

  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/confirmation");
  };

  return (
    <>
      <ProgressBar />
      <motion.div
        className="payment-page-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>Payment for {state.name}</h1>
        <p>Base Rate: ${state.rate}</p>
        <div className="additional-options">
          <h2>Select Additional Options:</h2>
          {Object.keys(additionalCosts).map((feature) => (
            <label key={feature}>
              <input
                type="checkbox"
                value={feature}
                onChange={handleFeatureChange}
              />
              {feature} (+${additionalCosts[feature]})
            </label>
          ))}
        </div>
        <div className="total-amount">
          <h2>Total Amount: ${totalAmount}</h2>
        </div>
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      </motion.div>
    </>
  );
};

export default PaymentPage;
