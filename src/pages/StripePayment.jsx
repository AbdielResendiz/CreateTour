import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OHTHqGhUhhWDkJz6fviWUAbK98E2SJJda15BEau8gfxN7DfACAmOaO3j5BzOYpKq1HG9DKze6Vm72FjzXmB9T6A00VuvnwjR3');

const CheckoutForm = () => {
    return (
        <form>
            <PaymentElement />
            <button>Submit</button>
        </form>
    );
};



export default function StripePayment() {
    const options = {
        // passing the client secret obtained from the Stripe Dashboard
        clientSecret: '{{ssk_test_51OHTHqGhUhhWDkJzMc3UQEWqyg2ZaUNe4bqVN0kIpHB76ycDcG8eYyeGuXVUbdjMlX2l0TtWRpce0bqtpdT1f15c00D1334IL2}}',
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
};

