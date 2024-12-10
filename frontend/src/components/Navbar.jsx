import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="">
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                <Link to="/">Todo</Link>
              </h1>
            </div>
            <div className="flex space-x-4 items-center">
              <Link className="text-gray-800 text-sm" to="/login">
                Login
              </Link>

              <Link
                className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
