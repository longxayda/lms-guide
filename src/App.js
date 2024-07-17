import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import AboutPage from "./components/AboutPage"; 
import KhoiTaoHeThong from "./components/Admin-Dashboard/KhoiTaoHeThong";
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/khoi-tao-he-thong" element={<KhoiTaoHeThong />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
