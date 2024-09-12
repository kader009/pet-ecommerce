import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card === null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type:'card',
      card
    })

    if(error){
      console.log(error);
    }else{
      console.log(paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-2 rounded my-3"
        type="submit"
        disabled={!stripe}
      >
        Payment
      </button>
    </form>
  );
};

export default CheckOutForm;
