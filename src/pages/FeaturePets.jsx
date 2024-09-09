import { useState } from 'react';

const FeaturedPets = () => {
  const [featuredPets, SetfeaturedPets] = useState([]);
  fetch(`http://localhost:5000/petlist`)
    .then((res) => res.json())
    .then((data) => {
      SetfeaturedPets(data);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Pets
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-4">
          {featuredPets.slice(0, 6).map((pet) => (
            <div
              key={pet._id}
              className="w-[24rem] bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 mx-4"
            >
              <img
                className="w-full h-56 object-cover"
                src={pet.images}
                alt={pet.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pet.name}
                </h3>
                <p className="text-[#f04336] mt-2 text-lg font-bold">
                  $ {pet.price}
                </p>
                <p className=" mt-2 text-lg">{pet.description}</p>
                <button className="mt-6 w-full px-4 py-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-md">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
