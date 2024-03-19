import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    });
  };

  const initiatePayment = async () => {
    setLoading(true);
    setPaymentStatus(null);
    setErrorMessage('');

    try {
      const response = await axios.post(
        'https://api.flouci.com/payments/initiate',
        {
          // Pass paymentDetails to the API
          ...paymentDetails
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_FLOUCI_API_KEY}`,
          },
        }
      );

      if (response.data.success) {
        // Payment initiation was successful
        setPaymentStatus('success');
        console.log('Payment initiated:', response.data.paymentId);
      } else {
        // Payment initiation failed
        setPaymentStatus('error');
        setErrorMessage(response.data.error);
        console.error('Payment initiation failed:', response.data.error);
      }
    } catch (error) {
      // Handle network errors or other issues
      setPaymentStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Error initiating payment:', error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={paymentDetails.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={paymentDetails.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentDetails.cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="text"
          name="expirationDate"
          value={paymentDetails.expirationDate}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentDetails.cvv}
          onChange={handleInputChange}
        />
      </div>

      {paymentStatus === 'success' && (
        <div className="success-message">Payment initiated successfully!</div>
      )}
      {paymentStatus === 'error' && (
        <div className="error-message">{errorMessage}</div>
      )}
      
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Initiate Payment'}
      </button>
    </div>
  );
};

export default PaymentComponent;
