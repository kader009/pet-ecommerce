import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY)
const CheckOut = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckOutForm/>
      </Elements>
    </div>
  );
};

export default CheckOut;