// Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenu((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isSubmenuActive = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">Lời Giới Thiệu</Link>
        </li>
        <h5>QUẢN TRỊ VIÊN</h5>
        <li className={isActive("/khoi-tao-he-thong") ? "active" : ""}>
          <Link to="/khoi-tao-he-thong">Khởi tạo hệ thống</Link>
        </li>
        <li className={isSubmenuActive(["/cai-dat"]) ? "active" : ""}>
          <div onClick={() => toggleSubmenu(1)}>
            <span>Cài đặt</span>
          </div>
          {openSubmenu[1] && (
            <ul className="submenu">
              <li className={isActive("/tai-khoang-cai-dat") ? "active" : ""}>
                <Link to="/tai-khoang-cai-dat">Tài khoản - cài đặt</Link>
              </li>
              <li className={isActive("/trang-chu") ? "active" : ""}>
                <Link to="/trang-chu">Trang chủ</Link>
              </li>
              <li className={isActive("/menu") ? "active" : ""}>
                <Link to="/menu">Menu</Link>
              </li>
              <li className={isActive("/khoa-hoc") ? "active" : ""}>
                <Link to="/khoa-hoc">Khóa học</Link>
              </li>
              <li className={isActive("/thanh-toan") ? "active" : ""}>
                <Link to="/thanh-toan">Thanh toán</Link>
              </li>
              <li className={isActive("/goi-thanh-vien") ? "active" : ""}>
                <Link to="/goi-thanh-vien">Gói thành viên</Link>
              </li>
              <li className={isActive("/chung-chi") ? "active" : ""}>
                <Link to="/chung-chi">Chứng chỉ</Link>
              </li>
              <li className={isActive("/chu-de") ? "active" : ""}>
                <Link to="/chu-de">Chủ đề</Link>
              </li>
              <li className={isActive("/ten-mien") ? "active" : ""}>
                <Link to="/ten-mien">Tên miền</Link>
              </li>
              <li className={isActive("/goi-ssas") ? "active" : ""}>
                <Link to="/goi-ssas">Gói Saas</Link>
              </li>
              <li className={isActive("/nhat-ky-he-thong") ? "active" : ""}>
                <Link to="/nhat-ky-he-thong">Nhật ký hệ thống</Link>
              </li>
              <li className={isActive("/thong-bao") ? "active" : ""}>
                <Link to="/thong-bao">Thông Báo</Link>
              </li>
              <li className={isActive("/buoi-hoc-truc-tuyen") ? "active" : ""}>
                <Link to="/buoi-hoc-truc-tuyen">Buổi học trực tuyến</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={isSubmenuActive(["/nguoi-dung"]) ? "active" : ""}>
          <div onClick={() => toggleSubmenu(2)}>
            <span>Người dùng</span>
          </div>
          {openSubmenu[2] && (
            <ul className="submenu">
              <li className={isActive("/nhat-ky-he-thong") ? "active" : ""}>
                <Link to="/nhat-ky-he-thong">Tạo/Chỉnh sửa/Xóa người dùng</Link>
              </li>
              <li className={isActive("/thong-bao") ? "active" : ""}>
                <Link to="/thong-bao">Đăng nhập vào tài khoản khác</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={isSubmenuActive(['/khoa-hoc']) ? 'active' : ''}>
          <Link to={'/khoa-hoc'} onClick={() => toggleSubmenu(3)}>
            <span>Khóa học</span>
          </Link>
          {openSubmenu[3] && (
            <ul className="submenu">
              <li
                className={
                  isActive("/tao-chinh-sua-xoa-khoa-hoc") ? "active" : ""
                }
              >
                <Link to="/tao-chinh-sua-xoa-khoa-hoc">
                  Tạo/Chỉnh sửa/Xóa khóa học
                </Link>
              </li>
              <li>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu(4);
                  }}
                  className={
                    isSubmenuActive(["/cap-nhat-noi-dung-khoa-hoc"])
                      ? "active"
                      : ""
                  }
                >
                  <span>Cập nhật nội dung khóa học</span>
                </div>
                {openSubmenu[4] && (
                  <ul className="submenu">
                    <li
                      className={
                        isActive("/chinh-sua-ten-khoa-hoc-tao-lop-hoc")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/chinh-sua-ten-khoa-hoc-tao-lop-hoc">
                        1. Chỉnh sửa tên Khóa học/Tạo lớp học
                      </Link>
                    </li>
                    <li
                      className={
                        isActive("/chinh-sua-banner-khoa-hoc") ? "active" : ""
                      }
                    >
                      <Link to="/chinh-sua-banner-khoa-hoc">
                        2. Chỉnh sửa banner khóa học
                      </Link>
                    </li>
                    <li
                      className={
                        isActive("/nhom-hoc-vien-tep-quy-tac-bao-cao")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/nhom-hoc-vien-tep-quy-tac-bao-cao">
                        3. Nhóm học viên, Tệp, Quy tắc & Lộ trình, Báo cáo
                      </Link>
                    </li>
                    <li
                      className={
                        isActive("/chinh-sua-danh-muc") ? "active" : ""
                      }
                    >
                      <Link to="/chinh-sua-danh-muc">
                        4. Chỉnh sửa danh mục
                      </Link>
                    </li>
                    <li
                      className={isActive("/chinh-sua-mo-ta") ? "active" : ""}
                    >
                      <Link to="/chinh-sua-mo-ta">5. Chỉnh sửa mô tả</Link>
                    </li>
                    <li
                      className={
                        isActive("/quan-ly-bai-hoc-bai-kiem-tra")
                          ? "active"
                          : ""
                      }
                    >
                      <Link to="/quan-ly-bai-hoc-bai-kiem-tra">
                        6. Quản lý bài học/bài kiểm tra
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className={isActive("/lop-hoc") ? "active" : ""}>
          <Link to="/lop-hoc">Lớp học</Link>
        </li>
        <li className={isActive("/danh-muc") ? "active" : ""}>
          <Link to="/danh-muc">Danh mục</Link>
        </li>
        <li className={isActive("/quyen-nguoi-dung") ? "active" : ""}>
          <Link to="/quyen-nguoi-dung">Quyền người dùng</Link>
        </li>
        <li className={isActive("/nhom-hoc-vien") ? "active" : ""}>
          <Link to="/nhom-hoc-vien">Nhóm học viên</Link>
        </li>
        <li className={isActive("/nhap-xuat") ? "active" : ""}>
          <Link to="/nhap-xuat">Nhập xuất dữ liệu</Link>
        </li>
        <li className={isActive("/bao-cao") ? "active" : ""}>
          <Link to="/bao-cao">Báo cáo</Link>
        </li>
        <li className={isActive("/dang-nhap-vao-vai-tro-khac") ? "active" : ""}>
          <Link to="/dang-nhap-vao-vai-tro-khac">Đăng nhập vai trò khác</Link>
        </li>
        <li className={isActive("/tin-nhan") ? "active" : ""}>
          <Link to="/tin-nhan">Tin nhắn</Link>
        </li>
        <li className={isActive("/ho-so") ? "active" : ""}>
          <Link to="/ho-so">Hồ sơ</Link>
        </li>
        <li className={isActive("/lien-he") ? "active" : ""}>
          <Link to="/lien-he">Liên hệ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
