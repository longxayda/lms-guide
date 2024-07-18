import React from "react";
import menu1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/3_MENU/MENU_1.png";
import menu2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/3_MENU/MENU_2.png";
import menu3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/3_MENU/MENU_3.png";
import menu4 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/3_MENU/MENU_4.png";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <p>Bước 1: Bấm vào nút Tạo menu</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "2px",
            height: "360px",
          }}
          src={menu1}
        />
      </div>
      <p>
        Bước 2: Hệ thống sẽ mở một cửa sổ nhỏ. Tại đây, điền các thông tin như
        Tên, URL, có mở thẻ mới hay không
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "2px",
            height: "360px",
          }}
          src={menu2}
        />
      </div>
      <p>
        Bước 3: Bấm tạo. Sau khi tạo thành công, thanh header sẽ có một menu
        mới, bấm vào sẽ truy cập tới đường link đã tạo
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "2px",
            height: "42px   ",
            // border: "1px solid black",
          }}
          src={menu3}
        />
      </div>
      <p>
        Có thể xóa hoặc chỉnh sửa menu bằng cách nhấp vào nút ... và có thể sắp
        xếp trình tự bằng cách giữ và kéo menu.
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "contain",
            borderRadius: "2px",
            height: "360px   ",
            // border: "1px solid black",
          }}
          src={menu4}
        />
      </div>
    </div>
  );
};

export default Menu;
