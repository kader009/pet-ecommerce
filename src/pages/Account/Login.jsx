import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Login = () => {
  const { signIn, google, github } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password);
    console.log(email, password);
  };

  const googleLog = () => {
    google();
  };

  const githubLog = () => {
    github();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-4 mt-6">
          <div className="flex gap-2">
            <button
              onClick={googleLog}
              className="flex items-center justify-center w-full bg-red-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none "
            >
              <svg
                className="w-6 h-6 mr-2"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.14 0 5.64 1.08 7.57 3.19L37 8.86C33.5 5.86 29.2 4 24 4 14.64 4 7.16 10.64 4.51 19.24l6.91 5.38C13.3 17.44 18.14 13 24 13c2.53 0 4.83.93 6.6 2.5l5.24-5.25C32.71 8.84 28.52 6.75 24 6.75z"
                />
                <path
                  fill="#34A853"
                  d="M44.5 24c0-1.63-.14-3.11-.41-4.55H24v9.09h11.64c-.5 2.59-1.84 4.76-3.92 6.21l6.34 4.92C41.69 36.06 44.5 30.57 44.5 24z"
                />
                <path
                  fill="#4A90E2"
                  d="M24 44c6.56 0 12.08-2.17 16.1-5.88l-6.34-4.92C30.98 35.32 27.71 37 24 37c-5.88 0-10.84-3.95-12.63-9.29l-6.91 5.37C8.38 38.77 15.81 44 24 44z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.37 27.71C10.69 25.88 10.25 23.88 10.25 21.75c0-2.13.44-4.13 1.12-5.96l-6.91-5.37C2.8 14.88 2 17.62 2 21.75c0 4.14.8 7.88 2.46 11.04l6.91-5.37z"
                />
              </svg>
              Google
            </button>

            <button
              onClick={githubLog}
              className="flex items-center justify-center w-full bg-gray-800 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.579 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.237-3.221-.124-.305-.535-1.529.117-3.186 0 0 1.008-.322 3.301 1.23.956-.265 1.983-.398 3.003-.403 1.02.005 2.047.138 3.004.403 2.292-1.552 3.299-1.23 3.299-1.23.654 1.657.242 2.881.118 3.186.77.839 1.237 1.911 1.237 3.221 0 4.61-2.803 5.623-5.473 5.921.43.369.813 1.096.813 2.213 0 1.598-.015 2.886-.015 3.276 0 .32.218.694.825.576 4.765-1.584 8.198-6.081 8.198-11.383 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            New to here?
            <Link to="/register" className="text-blue-600 hover:underline ms-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
