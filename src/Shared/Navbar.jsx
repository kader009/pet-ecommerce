import { Link } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const {user} = useAuth()
  console.log(user?.uid);
  return (
    <div className="navbar bg-white sticky top-0 z-10"> 
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile menu button */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Mobile dropdown menu */}
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pet-listing">Pet listing</Link>
            </li>
            <li>
              <Link to="/cart">Carts </Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Website logo */}
        <Link className="text-xl font-extrabold" to="/">
          Fable
        </Link>
      </div>

      {/* Navbar center for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pet-listing">Pet listing</Link>
          </li>
          <li>
            <Link to="/cart">Carts </Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Navbar end for buttons */}
      <div className="navbar-end">
        <Link
          to="/login"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg hover:bg-gradient-to-l transition-all duration-300 shadow-md py-2 px-4 text-white "
        >
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
