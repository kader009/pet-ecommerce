import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const Cart = () => {
  const { cart, removeFromCart } = useAuth();

  // Calculate the total number of products and total price
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-black mb-8 text-center">Your Cart</h1>

      {totalItems > 0 ? (
        <>
          {/* Items Info and Pay Section */}
          <div className="flex justify-between items-center  p-6 rounded-lg shadow-md mb-8">
            {/* Left - Total Items */}
            <p className="text-xl font-semibold">
              You have <span className="font-bold">{totalItems}</span>{' '}
              {totalItems > 1 ? 'items' : 'item'} in your cart.
            </p>

            {/* Center - Total Price */}
            <p className="text-3xl font-bold text-gray-700">
              Total: <span className="text-green-500">${totalPrice.toFixed(2)}</span>
            </p>

            {/* Right - Pay Now Button */}
            <div>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition">
                <Link to={'/checkout'}>Pay Now</Link>
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between"
              >
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg mr-6"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold text-gray-700">${item.price}</p>
                </div>
                <button
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
