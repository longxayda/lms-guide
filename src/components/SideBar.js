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
        <li className={isSubmenuActive(["/khoa-hoc"]) ? "active" : ""}>
          <Link to={"/khoa-hoc"} onClick={() => toggleSubmenu(3)}>
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
        <h5>GIÁO VIÊN</h5>
        <li className={isActive("/man-hinh-quan-ly") ? "active" : ""}>
          <Link to="/man-hinh-quan-ly">Trang Tổng Quan</Link>
        </li>
        <li className={isSubmenuActive(["/course-management"]) ? "active" : ""}>
          <Link to={"/course-management"} onClick={() => toggleSubmenu(4)}>
            <span>Nội dung khóa học</span>
          </Link>
          {openSubmenu[4] && (
            <ul className="submenu">
              <li>
                <Link
                  to={"/bai-hoc-kiem-tra"}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubmenu(5);
                  }}
                  className={
                    isSubmenuActive(["/bai-hoc-kiem-tra"]) ? "active" : ""
                  }
                >
                  <span>Bài học / Bài kiểm tra</span>
                </Link>
                {openSubmenu[5] && (
                  <ul className="submenu">
                    <li className={isActive("/phan") ? "active" : ""}>
                      <Link to="/phan">Phần </Link>
                    </li>
                    <li className={isActive("/hoc-truc-tiep") ? "active" : ""}>
                      <Link to="/hoc-truc-tiep">Buổi học trực tiếp</Link>
                    </li>
                    <li className={isActive("/video") ? "active" : ""}>
                      <Link to="/video">Video</Link>
                    </li>
                    <li className={isActive("/am-thanh") ? "active" : ""}>
                      <Link to="/am-thanh">Âm thanh</Link>
                    </li>
                    <li className={isActive("/ban-trinh-bay") ? "active" : ""}>
                      <Link to="/ban-trinh-bay">Bản trình bày</Link>
                    </li>
                    <li className={isActive("/scorm") ? "active" : ""}>
                      <Link to="/scorm">SCORM</Link>
                    </li>
                    <li className={isActive("/noi-dung") ? "active" : ""}>
                      <Link to="/noi-dung">Nội dung</Link>
                    </li>
                    <li className={isActive("/iframe") ? "active" : ""}>
                      <Link to="/iframe">IFrame</Link>
                    </li>
                    <li className={isActive("/bai-kiem-tra") ? "active" : ""}>
                      <Link to="/bai-kiem-tra">Bài kiểm tra</Link>
                    </li>
                    <li className={isActive("/bai-tu-luan") ? "active" : ""}>
                      <Link to="/bai-tu-luan">Bài tự luận</Link>
                    </li>
                    <li className={isActive("/khao-sat") ? "active" : ""}>
                      <Link to="/khao-sat">Khảo sát</Link>
                    </li>
                    <li
                      className={isActive("/sao-chep-bai-hoc") ? "active" : ""}
                    >
                      <Link to="/sao-chep-bai-hoc">Sao chép bài học</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className={isActive("/danh-sach-nguoi-dung") ? "active" : ""}>
                <Link to="/danh-sach-nguoi-dung">Danh sách người dùng</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={isActive("/lich-ca-nhan") ? "active" : ""}>
          <Link to="/lich-ca-nhan">Lịch cá nhân</Link>
        </li>
        <li className={isActive("/dang-nhap-voi-vai-tro-khac") ? "active" : ""}>
          <Link to="/dang-nhap-voi-vai-tro-khac">
            Đăng nhập với vai trò khác
          </Link>
        </li>
        <li className={isActive("/tin-nhan") ? "active" : ""}>
          <Link to="/tin-nhan">Tin nhắn</Link>
        </li>
        <li className={isActive("/ho-so") ? "active" : ""}>
          <Link to="/ho-so">Hồ sơ</Link>
        </li>
        <li className={isActive("/hoi-dap") ? "active" : ""}>
          <Link to="/hoi-dap">Hỏi & đáp</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
