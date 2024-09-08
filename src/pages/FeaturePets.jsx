const featuredPets = [
  {
    id: 1,
    name: "Golden Retriever",
    price: "$500",
    image: "https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Siamese Cat",
    price: "$350",
    image: "https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Parrot",
    price: "$150",
    image: "https://images.unsplash.com/photo-1526346093155-a601c2cbe917?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Hamster",
    price: "$50",
    image: "https://images.unsplash.com/photo-1487341290491-1081724e5844?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeaturedPets = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {featuredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white shadow-md rounded-lg overflow-hidden mx-4"
            >
              <img
                className="w-full h-48 object-cover"
                src={pet.image}
                alt={pet.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{pet.name}</h3>
                <p className="text-gray-700 mt-2">{pet.price}</p>
                <button className="mt-4 btn btn-primary w-full">
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
