import { useEffect, useState } from 'react';

const PetListing = () => {
  const [pet, Setpet] = useState([]);
  const [featuredPets, SetfeaturedPets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectcategories, setSelectCategories] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/petlist`)
      .then((res) => res.json())
      .then((data) => {
        Setpet(data);
        SetfeaturedPets(data);
        const uniCategory = [...new Set(data.map((pet) => pet.category))];
        setCategories(uniCategory);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    FilterPet();
  }, [selectcategories]);

  const FilterPet = () => {
    let updatedPet = pet;

    if (selectcategories) {
      updatedPet = updatedPet.filter(
        (pet) => pet.category === selectcategories
      );
    }

    SetfeaturedPets(updatedPet)
  };

  const handleSelect = (e) => {
    setSelectCategories(e.target.value);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Filter Panel */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6 lg:sticky lg:top-0 lg:h-screen">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            // value={searchTerm}
            // onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <select
            value={selectcategories}
            onChange={handleSelect}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            // value={priceRange}
            // onChange={handlePriceRangeChange}
            className="w-full"
          />
          <p className="text-sm mt-2">
            {/* ${priceRange[0]} - ${priceRange[1]} */}
          </p>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Ratings</h3>
          <select
            // value={rating}
            // onChange={handleRatingChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="0">All Ratings</option>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <button
          className="w-full px-4 py-2 mt-4 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition-all"
          onClick={FilterPet}
        >
          Apply Filters
        </button>
      </aside>

      {/* Product Grid */}
      <main className="w-full lg:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPets.length > 0 ? (
          featuredPets.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg p-4 transition-all transform hover:scale-105"
            >
              <img
                src={product.images}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{product.category}</p>
                <p className="text-[#f04336] mt-2 text-lg font-bold">
                  $ {product.price}
                </p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm">
                    {'★'.repeat(product.rating)}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    ({product.rating} Stars)
                  </span>
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md hover:bg-indigo-600 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found matching your filters.</p>
        )}
      </main>
    </div>
  );
};

export default PetListing;
