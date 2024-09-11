import useAuth from "../Hook/useAuth";

const Cart = () => {
  const {cart} = useAuth()
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <img src={item.images} alt={item.name} className="w-20 h-20 object-cover" />
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;