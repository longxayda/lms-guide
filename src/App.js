// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import AboutPage from "./components/AboutPage"; // Import other pages/components as needed

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/gioi-thieu" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
