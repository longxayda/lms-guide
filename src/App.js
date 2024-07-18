import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";

import AboutPage from "./components/AboutPage"; // Import other pages/components as needed
import Khoitaohethong from "./components/Admin-Dashboard/KhoiTaoHeThong";
import Caidats from "./components/Admin-Dashboard/Caidats";
import KhoiTaoHeThong from "./components/Admin-Dashboard/KhoiTaoHeThong";
import TaiKhoangCaiDat from "./components/Admin-Dashboard/TaiKhoangCaiDat";
import Trangchu from "./components/Admin-Dashboard/Trangchu";

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
            <Route path="/cai-dat" element={<Caidats />} />
            <Route path="/khoi-tao-he-thong" element={<KhoiTaoHeThong />} />
            <Route path="/tai-khoang-cai-dat" element={<TaiKhoangCaiDat />} />
            <Route path="/trang-chu" element={<Trangchu />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
