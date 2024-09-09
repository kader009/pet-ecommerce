const HeroSection = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1619326230097-1b2102190f89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Fable</h1>
          <p className="mb-5">
            At Fable, we believe every pet deserves a loving home. Explore our wide range of pets ready to become part of your family.
          </p>
          <button className="px-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-md">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
