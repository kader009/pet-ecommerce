import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const Cart = () => {
  const { cart, removeFromCart } = useAuth();

  // Calculate the total number of products and total price
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-black mb-4 text-center">Your Cart</h1>

      {totalItems > 0 ? (
        <>
          <p className="text-lg font-semibold text-center mb-4">
            You have <span className="font-bold">{totalItems}</span>{' '}
            {totalItems > 1 ? 'items' : 'item'} in your cart.
          </p>

          {/* Cart Items */}
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center"
            >
              <img
                src={item.images}
                alt={item.name}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p>{item.description}</p>
                <p>${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => removeFromCart(item.name)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price and Pay Button */}
          <div className="mt-6">
            <p className="text-2xl font-semibold text-center mb-4">
              Total Price:{' '}
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>

            <div className="text-center">
              <button className="bg-green-500 text-white px-6 py-2 rounded shadow-md hover:bg-green-600">
                <Link to={'/checkout'}>Pay Now</Link>
              </button>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
