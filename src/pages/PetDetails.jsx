import { useLoaderData } from 'react-router-dom';

const PetDetails = () => {
  const data = useLoaderData();
  const { images, name, description, price } = data;

  return (
    <div className="flex flex-col lg:flex-row p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="lg:w-1/2 p-4">
        <img
          src={images}
          alt={name}
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      <div className="lg:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
        <p className="text-2xl font-semibold text-[#f04336] mb-4">${price}</p>
        <button className="w-full lg:w-1/2 px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PetDetails;
