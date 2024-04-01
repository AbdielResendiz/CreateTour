import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '@stripe/stripe-js';
import axios from 'axios';

const StripeTest = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const stripePromise = loadStripe('pk_test_51OHTHqGhUhhWDkJz6fviWUAbK98E2SJJda15BEau8gfxN7DfACAmOaO3j5BzOYpKq1HG9DKze6Vm72FjzXmB9T6A00VuvnwjR3');

    const handlePayment = async () => {
        const stripe = await stripePromise;
        const { error, token } = await stripe.createToken();

        if (error) {
            console.error(error.message);
        } else {
            const response = await axios.post('https://createtours.com.mx/backend/public/stripe/create-charge', {
                stripeToken: token.id,
            });

            if (response.data.success) {
                setSuccessMessage('Payment Successful!');
            }
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            {successMessage && (
                                <div
                                    style={{
                                        color: 'green',
                                        border: '2px green solid',
                                        textAlign: 'center',
                                        padding: '5px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    {successMessage}
                                </div>
                            )}
                            <label htmlFor="card-element" className="mb-5">
                                Checkout Forms
                            </label>
                            <br />
                            <div id="card-element" className="form-control"></div>
                            <button
                                className="btn btn-success mt-3"
                                type="button"
                                style={{ marginTop: '20px', width: '100%', padding: '7px' }}
                                onClick={handlePayment}
                            >
                                PAY $5
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StripeTest;