import { FaUser, FaLock } from "react-icons/fa";
import catImage from "./cat-01.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">

      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg">

        <form action="">

          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

          <img src={catImage} id="img-cat" alt="image-cat" className="w-36 h-36 mx-auto rounded-full object-cover mb-6" />

          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <FaUser className="text-blue-500 mr-3" />
            <input
              type="email"
              placeholder="E-mail"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2 mb-6">
            <FaLock className="text-blue-500 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </div>

        </form>

      </div>

    </div>


  )
}

export default Login
