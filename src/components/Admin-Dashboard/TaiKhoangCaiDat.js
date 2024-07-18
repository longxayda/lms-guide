import React from "react";
import bonhandien from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/bo_Nhan_dien.png";
import copyright from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/COPYRIGHT_1.png";
import buoihoc from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/BUỔI HỌC TT.png";
import khuvuc from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/KHU VỰC.png";
import nguoidung from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/EMAIL_NGƯỜI_GỬI.png";
import pluginchat from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/PLUGIN CHAT.png";
import tiente from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/1_TÀI KHOẢN & CÀI ĐẶT/TIỀN TỆ.png";
const TaiKhoangCaiDat = () => {
  return (
    <div>
      <h1>Tài khoảng cài đặt</h1>
      <p>Trang này cho phép tùy chỉnh, thiết lập hệ thống</p>
      <h3>BỘ NHẬN DIỆN</h3>
      <p>
        Ta có thể thiết lập tên thương hiệu, các hình ảnh, logo của thương hiệu
        trên hệ thống.
      </p>
      <li>Tiêu đề</li>
      <li>Mô tả</li>
      <li>Logo</li>
      <li>Biểu tượng</li>
      <li>Banner</li>
      <li>Banner link</li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={bonhandien}
        />
      </div>
      <h3>COPYRIGHT</h3>
      <p>
        Dùng để thay đổi copyright của thương hiệu thay cho copyright mặc định
        của hệ thống.
      </p>
      <li>
        Copyright: bật tắt nút Hiển thị copyright, dùng để thay đổi nội dung
        footer thay cho "Bản quyền @ 2022 Edutek"
      </li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={copyright}
        />
      </div>

      <h3>BUỔI HỌC TRỰC TUYẾN</h3>
      <p>
        Dùng để thiết lập công cụ dạy học trực tuyến là nền tảng Zoom, hay thêm
        các link liên kết như Google Meet, Microsoft Teams...
      </p>
      <li>
        Có thể thay đổi công cụ dạy học trực tuyến là Zoom hoặc Thêm link liên
        kết như: link Google Meet, Microsoft Teams...
      </li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={buoihoc}
        />
      </div>
      <h3>KHU VỰC</h3>
      <li>Chọn Múi giờ và Ngôn ngữ mặc định của hệ thống.</li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={khuvuc}
        />
      </div>
      <h3>Người dùng</h3>
      <li>Bật để thêm các plugin hỗ trợ qua Facebook chat hoặc Tawk chat.</li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={nguoidung}
        />
      </div>
      <h3>PLUGIN CHAT</h3>
      <li>Bật để thêm các plugin hỗ trợ qua Facebook chat hoặc Tawk chat.</li>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={nguoidung}
        />
      </div>
      
    </div>
  );
};
export default TaiKhoangCaiDat;
