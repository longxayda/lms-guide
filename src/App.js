import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";

import AboutPage from "./components/AboutPage"; // Import other pages/components as needed
import Khoitaohethong from "./components/Admin-Dashboard/KhoiTaoHeThong";
import Caidats from "./components/Admin-Dashboard/Caidats";
import KhoiTaoHeThong from "./components/Admin-Dashboard/KhoiTaoHeThong";
import TaiKhoangCaiDat from "./components/Admin-Dashboard/TaiKhoangCaiDat";
import Trangchu from "./components/Admin-Dashboard/Trangchu";
import TrangTongQuan from "./components/Instructor-Dashboard/GIẢNG VIÊN/TrangTongQuan";
import NoiDungKhoaHoc from "./components/Instructor-Dashboard/GIẢNG VIÊN/NoiDungKhoaHoc";
import BaihocKiemTra from "./components/Instructor-Dashboard/GIẢNG VIÊN/NOIDUNGKHOAHOC/BaihocKiemTra";
import Phan from "./components/Instructor-Dashboard/GIẢNG VIÊN/NOIDUNGKHOAHOC/Phan";
import HocTrucTiep from "./components/Instructor-Dashboard/GIẢNG VIÊN/NOIDUNGKHOAHOC/HocTrucTiep";
import DanhSachNguoiDung from "./components/Instructor-Dashboard/GIẢNG VIÊN/NOIDUNGKHOAHOC/DanhSachNguoiDung";
import LichCaNhan from "./components/Instructor-Dashboard/LichCaNhan";
import DangNhapVoiVaiTroKhac from "./components/Instructor-Dashboard/DangNhapVoiVaiTroKhac";
import TinNhan from "./components/Instructor-Dashboard/TinNhan";
import Hoso from "./components/Instructor-Dashboard/Hoso";
import HoiVaDap from "./components/Instructor-Dashboard/HoiVaDap";
import Menu from "./components/Admin-Dashboard/Menu";
import Khoahoc from "./components/Admin-Dashboard/Khoahoc";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="Header">
          {" "}
          <Header />
        </div>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/gioi-thieu" element={<AboutPage />} />
              <Route path="/khoi-tao-he-thong" element={<Khoitaohethong />} />
              <Route path="/cai-dat" element={<Caidats />} />
              <Route path="/khoi-tao-he-thong" element={<KhoiTaoHeThong />} />

              <Route path="/menu" element={<Menu />} />

              <Route path="/khoa-hoc" element={<Khoahoc />} />

              <Route path="/tai-khoang-cai-dat" element={<TaiKhoangCaiDat />} />
              <Route path="/trang-chu" element={<Trangchu />} />
              <Route path="/man-hinh-quan-ly" element={<TrangTongQuan />} />
              <Route path="/course-management" element={<NoiDungKhoaHoc />} />
              <Route path="/bai-hoc-kiem-tra" element={<BaihocKiemTra />} />
              <Route path="/phan" element={<Phan />} />
              <Route path="/hoc-truc-tiep" element={<HocTrucTiep />} />
              <Route
                path="/danh-sach-nguoi-dung"
                element={<DanhSachNguoiDung />}
              />
              <Route path="/lich-ca-nhan" element={<LichCaNhan />} />
              <Route
                path="/dang-nhap-voi-vai-tro-khac"
                element={<DangNhapVoiVaiTroKhac />}
              />
              <Route path="/tin-nhan" element={<TinNhan />} />
              <Route path="/ho-so" element={<Hoso />} />
              <Route path="/hoi-dap" element={<HoiVaDap />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
