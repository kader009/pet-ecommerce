const featuredPets = [
  {
    id: 1,
    name: "Golden Retriever",
    price: "$500",
    image:
      "https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Siamese Cat",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Parrot",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Hamster",
    price: "$50",
    image:
      "https://images.unsplash.com/photo-1487341290491-1081724e5844?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedPets = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Pets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 mx-4"
            >
              <img
                className="w-full h-56 object-cover"
                src={pet.image}
                alt={pet.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pet.name}
                </h3>
                <p className="text-gray-500 mt-2 text-lg">{pet.price}</p>
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
