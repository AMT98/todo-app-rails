import React, { useState } from "react";
import { login } from "../services/api";
import { Link } from "react-router-dom";

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      onLoginSuccess(response.data);
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {/* <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button> */}
      <div className="h-screen bg-gray-100 flex justify-center">
        <div className="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
          <form onSubmit={handleSubmit}>
            <div>
              <label for="email" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="@email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
            <div className="mb-6">
              <label for="name" className="block text-gray-800 font-bold">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              />
            </div>
            <Link
              className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
              to="/signup"
            >
              Signup to create an account
            </Link>
            <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
