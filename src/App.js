import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";

import AboutPage from "./components/AboutPage"; // Import other pages/components as needed
import Khoitaohethong from "./components/Admin-Dashboard/KhoiTaoHeThong";
import Caidat from "./components/Admin-Dashboard/Caidats";
import Sanpham from "./components/Admin-Dashboard/setting/setting";
import KhoiTaoHeThong from "./components/Admin-Dashboard/KhoiTaoHeThong";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />

            <Route path="/gioi-thieu" element={<AboutPage />} />
            <Route path="/khoi-tao-he-thong" element={<Khoitaohethong />} />
            <Route path="/caidat" element={<Caidat />} />
            <Route path="/caidat/" element={<Sanpham />} />

            <Route path="/khoi-tao-he-thong" element={<KhoiTaoHeThong />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
