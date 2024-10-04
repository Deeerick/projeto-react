import { FaUser, FaLock } from "react-icons/fa";
import catImage from "./logo-cat.png";
import React, { useState } from "react"; // Importar useState
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação simples: você pode integrar uma API aqui
    if (username === 'admin' && password === '1234') {
      // Redireciona para o perfil
      navigate('/profile');
    } else {
      // Exibe mensagem de erro se as credenciais estiverem incorretas
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">

      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg">

        <form onSubmit={handleLogin}>

          <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

          <img src={catImage} id="img-cat" alt="image-cat" className="w-36 h-36 mx-auto rounded-full object-cover mb-6" />

          <div className="flex items-center border-b border-gray-300 py-2 mb-4">
            <FaUser className="text-blue-500 mr-3" />
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>

          <div className="flex items-center border-b border-gray-300 py-2 mb-6">
            <FaLock className="text-blue-500 mr-3" />
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
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
