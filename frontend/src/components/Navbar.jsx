import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div class="">
          <div class="flex justify-between h-16 px-10 shadow items-center">
            <div class="flex items-center space-x-8">
              <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">Todo</h1>
            </div>
            <div class="flex space-x-4 items-center">
              <a href="#" class="text-gray-800 text-sm">
                LOGIN
              </a>
              <a
                href="#"
                class="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
              >
                SIGNUP
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
