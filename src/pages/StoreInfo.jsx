const StoreInfo = () => {
  return (
    <section className="py-12 px-4 lg:px-0 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Store Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-700">Email: contact@fablepets.com</p>
            <p className="text-gray-700">Phone: (123) 456-7890</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Store Hours</h3>
            <p className="text-gray-700">Mon - Fri: 9 AM - 6 PM</p>
            <p className="text-gray-700">Sat - Sun: 10 AM - 4 PM</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-700">123 Pet Street, Petville, PA 12345</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfo;
