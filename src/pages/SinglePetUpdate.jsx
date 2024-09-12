import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const SinglePetUpdate = () => {
  const data = useLoaderData();
  const { images, name, description, price, category, rating, _id } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const images = form.images.value;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const rating = form.rating.value;

    const formInfo = {
      images,
      name,
      description,
      price,
      category,
      rating,
    };
    console.log(formInfo);

    fetch(`http://localhost:5000/petlist/${_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formInfo),
    })
      .then((res) => res.json())
      .then((datas) => {
        toast.success('update details successfully');
        console.log(datas);
      })
      .catch((error) => {
        console.log(error);
        toast.error('something went wrong..');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Pet Information
        </h2>
        <form className="space-y-4" onSubmit={handleUpdate}>
          {/* Image URL */}
          <div>
            <label className="block font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="images"
              defaultValue={images}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label className="block font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={description}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block font-semibold text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              defaultValue={rating}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              // min="1"
              // max="5"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition"
          >
            Update Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default SinglePetUpdate;
