import { FaInfoCircle, FaEnvelope } from "react-icons/fa";

const StoreInfo = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Fable</h2>
        <div className="w-16 h-1 bg-indigo-600 mx-auto mb-6"></div>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          At Fable, we connect you with the perfect pet, offering a variety of
          loving companions for your home. Whether you're looking for a playful
          puppy or a calm cat, we have the right match for you. Our mission is
          to bring joy and companionship to your life through our carefully
          selected pets.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 transition duration-300">
            <FaInfoCircle className="mr-2" />
            Learn More
          </button>
          <button className="flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-500 transition duration-300">
            <FaEnvelope className="mr-2" />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
