import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import toast from 'react-hot-toast';

const PetDetails = () => {
  const data = useLoaderData();
  const { images, name, description, price, category, rating,_id } = data;
  const { user, addToCart } = useAuth();

  const handleAddToCart = () => {
    if (user) {
      const product = { images, name, description, price, category, rating };
      addToCart(product);
      toast.success(`${name} added to cart!`);
    } else {
      toast.error('Please login to add items to the cart.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row p-4">
    <div className="lg:w-1/2 p-4">
      <img
        src={images}
        alt={name}
        className="w-full h-80 object-cover rounded-lg"
      />
    </div>
    <div className="lg:w-1/2 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-extrabold mb-2">{name}</h1>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-lg text-gray-700 mb-4">Category: {category}</p>
        <div className="flex items-center mt-2 mb-3">
          <span className="text-yellow-500 text-sm">
            {'★'.repeat(rating)}
          </span>
          <span className="text-sm text-gray-500 ml-2">
            ({rating} Stars)
          </span>
        </div>
        <p className="text-2xl font-extrabold text-[#f04336] mb-4">
          ${price}
        </p>
      </div>
      {/* Flex container for the buttons */}
      <div className="flex space-x-4 mt-4 lg:mt-0">
        <button
          onClick={handleAddToCart}
          className="w-full lg:w-1/2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-all"
        >
          Add to Cart
        </button>
        <button
          className="w-full lg:w-1/2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-md hover:bg-green-700 transition-all"
        >
          <Link to={`/singleupdate/${_id}`}>
          
          Update
          </Link>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default PetDetails;
