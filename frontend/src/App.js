import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [user, setUser] = useState(null); // Store user data after login/signup

  // Function to handle successful login
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    console.log("Login successful:", userData); // Handle redirection or state updates here
  };

  // Function to handle successful signup
  const handleSignupSuccess = (userData) => {
    setUser(userData);
    console.log("Signup successful:", userData); // Handle redirection or state updates here
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        {/* Pass onLoginSuccess function to Login component */}
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        {/* Pass onSignupSuccess function to Signup component */}
        <Route
          path="/signup"
          element={<Signup onSignupSuccess={handleSignupSuccess} />}
        />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
