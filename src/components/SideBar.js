// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Lời Giới Thiệu</Link>
        </li>
        <h5>QUẢN TRỊ VIÊN</h5>
        <li>
          <Link to="/khoi-tao-he-thong">Khởi tạo hệ thống</Link>
        </li>
        <li>
          <Link to="/san-pham">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/lien-he">Liên hệ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
