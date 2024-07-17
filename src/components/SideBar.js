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
          <Link to="/cai-dat">Cài đặt</Link>
          <ul>
            <li>
              <Link to="/tai-khoang-cai-dat">Tài khoảng - cải đặt</Link>
            </li>
            <li>
              <Link to="/trang-chu">Trang chủ</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/khoa-hoc">Khóa học</Link>
            </li>
            <li>
              <Link to="/thanh-toan">Thanh toán</Link>
            </li>
            <li>
              <Link to="/goi-thanh-vien">Gói thành viên</Link>
            </li>
            <li>
              <Link to="/chung-chi">Chứng chỉ</Link>
            </li>
            <li>
              <Link to="/chu-de">Chủ đề</Link>
            </li>
            <li>
              <Link to="/ten-mien">Tên miền</Link>
            </li>
            <li>
              <Link to="/goi-ssas">Gói Saas</Link>
            </li>
            <li>
              <Link to="/nhat-ky-he-thong">Nhật ký hệ thống</Link>
            </li>
            <li>
              <Link to="/thong-bao">Thông Báo</Link>
            </li>
            <li>
              <Link to="/buoi-hoc-truc-tuyen">Buổi học trực tuyến</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/nguoi-dung">Người dùng</Link>
          <ul>
            <li>
              <Link to="/nhat-ky-he-thong">Tạo/Chỉnh sửa/Xóa người dùng</Link>
            </li>
            <li>
              <Link to="/thong-bao">Đăng nhập vào tài khoản khác</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/khoa-hoc">Khóa học</Link>
          <ul>
            <li>
              <Link to="/tao-chinh-sua-xoa-khoa-hoc">Tạo/Chỉnh sửa/Xóa khóa học</Link>
            </li>
            <li>
              <Link to="/cap-nhat-noi-dung-khoa-hoc">Cập nhật nội dung khóa học</Link>
              <ul>
                <li>
                  <Link to="/chinh-sua-ten-khoa-hoc-tao-lop-hoc">
                    1. Chỉnh sửa tên Khóa học/Tạo lớp học
                  </Link>
                </li>
                <li>
                  <Link to="/chinh-sua-banner-khoa-hoc">2. Chỉnh sửa banner khóa học</Link>
                </li>
                <li>
                  <Link to="/nhom-hoc-vien-tep-quy-tac-bao-cao">
                    3. Nhóm học viên, Tệp, Quy tắc & Lộ trình, Báo cáo
                  </Link>
                </li>
                <li>
                  <Link to="/chinh-sua-danh-muc">4. Chỉnh sửa danh mục</Link>
                </li>
                <li>
                  <Link to="/chinh-sua-mo-ta">5. Chỉnh sửa mô tảc</Link>
                </li>
                <li>
                  <Link to="/quan-ly-bai-hoc-bai-kiem-tra">6. Quản lý bài học/bài kiểm tra</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/lop-hoc">Lớp học</Link>
        </li>
        <li>
          <Link to="/danh-muc">Danh mục</Link>
        </li>
        <li>
          <Link to="/quyen-nguoi-dung">Quyền người dùng</Link>
        </li>
        <li>
          <Link to="/nhom-hoc-vien">Nhóm học viên</Link>
        </li>
        <li>
          <Link to="/nhap-xuat">Nhập xuất dữ liệu</Link>
        </li>
        <li>
          <Link to="/bao-cao">Báo cáo</Link>
        </li>
        <li>
          <Link to="/dang-nhap-vao-vai-tro-khac">
            Đăng nhập vai trò trò khác
          </Link>
        </li>
        <li>
          <Link to="/tin-nhan">Tin nhắn</Link>
        </li>
        <li>
          <Link to="/ho-so">Hồ sơ</Link>
        </li>
        <li>
          <Link to="/lien-he">Liên hệ</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
