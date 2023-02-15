import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <React.StrictMode>
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          )}
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
