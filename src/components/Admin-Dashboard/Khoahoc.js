import React from "react";
import khoahoc1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/4_KHÓA_HỌC/KHÓA HỌC_1.png";
import khoahoc2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/4_KHÓA_HỌC/KHÓA HỌC - 2.png";
import chungchi from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/4_KHÓA_HỌC/chungchi.png";
const Khoahoc = () => {
  return (
    <div>
      <h1> Khóa học</h1>
      <p>Phần này cho phép tùy chỉnh các khóa học theo các nguyên tắc riêng</p>
      <h3>ĐĂNG KÝ KHÓA HỌC</h3>
      <p>
        Khi cho phép, người dùng có thể tự đăng ký tài khoản tại trang đăng ký
        để đăng nhập vào hệ thống, và đăng ký các lớp học có trong hệ thống.
      </p>
      <p>
        Ngược lại khi không cho phép, người dùng chỉ có thể thấy các lớp học khi
        được Quản trị viên hoặc Giáo viên thêm vào lớp học.
      </p>
      <div>
        <img
          style={{
            width: "810px",
            objectFit: "cover",
            borderRadius: "2px",
            height: "360px   ",
            // border: "1px solid black",
          }}
          src={khoahoc1}
        />
      </div>
      <h3>CHỨNG CHỈ</h3>
      <p>
        Sau khi học viên hoàn thành khóa học, ta có thể cấp chứng chỉ cho họ
        bằng mẫu có sẵn hoặc tùy chỉnh mẫu theo thương hiệu của mình.
      </p>
      <p>
        Khi cho phép, học viên sẽ được cấp chứng chỉ sau khi hoàn thành khóa
        học.
      </p>
      <div>
        <img
          style={{
            width: "810px",
            objectFit: "contain",
            borderRadius: "2px",
            height: "360px   ",
            // border: "1px solid black",
          }}
          src={chungchi}
        />
      </div>
    </div>
  );
};

export default Khoahoc;
