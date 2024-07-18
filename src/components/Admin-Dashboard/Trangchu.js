import React from "react";
import banner_1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BANNER/BANNER_1.png";
import banner_2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BANNER/BANNER_2.png";
import banner_3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BANNER//BANNER_3.png";
import khoahoc1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/KHÓA HỌC/KHOA_HOC_1.png";
import khoahoc2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/KHÓA HỌC/KHOA_HOC_2.png";
import khoahoc3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/KHÓA HỌC/KHOA_HOC_3.png";
import baiviet1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BÀI VIẾT/BÀI_VIẾT_1.png";
import baiviet2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BÀI VIẾT/BÀI_VIẾT_2.png";
import baiviet3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/BÀI VIẾT/BÀI_VIẾT_3.png";
import text1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/TEXT/TEXT_1.png";
import text2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/TEXT/TEXT_2.png";
import text3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/TEXT/TEXT_3.png";
import danhgia1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/ĐÁNH GIÁ/ĐÁNH GIÁ_1.png";
import danhgia2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/ĐÁNH GIÁ/ĐÁNH GIÁ_2.png";
import danhgia3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/ĐÁNH GIÁ/ĐÁNH GIÁ_3.png";

import cot_video from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘC_VIDEO.png";
import cot_final from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_FINAL.png";
import cot_map1 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_MAP1.png";
import cot_map2 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_MAP2.png";
import cot_map3 from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_MAP3.png";
import cot_media from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_MEDIA.png";
import cot_text from "./QUẢN TRỊ VIÊN/2_CÀI ĐẶT/2_TRANG CHỦ/CỘT/CỘT_TEXT.png";
const Trangchu = () => {
  return (
    <div>
      <h1>Trang chủ</h1>
      <p>Dùng để tùy chỉnh trang chủ với giao diện theo màu sắc thương hiệu.</p>
      <p>
        Khi kích hoạt Trang chủ, ta có thể cài đặt các nội dung để hiển thị trên
        trang chủ như sau
      </p>
      <h3>BANNER</h3>
      <p>
        Dùng để tùy chỉnh ảnh bìa và các nội dung hiển thị trên ảnh. Nhập các
        nội dung, chọn Banner, sau đó bấm Tạo.
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={banner_1}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={banner_2}
        />
      </div>
      <p>Kết quả sẽ hiển thị như hình sau.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={banner_3}
        />
      </div>
      <h3>KHÓA HỌC</h3>
      <p>Dùng để hiển thị các khóa học tiêu biểu hoặc các khóa học mới nhất.</p>
      <p>
        Lưu ý: trang chủ chỉ hiển thị các loại khóa học như: Miễn phí, Thanh
        toán và Thành viên. Loại khóa học Riêng tư sẽ không hiển thị trên trang
        chủ.
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={khoahoc1}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={khoahoc2}
        />
      </div>
      <p>Kết quả sẽ hiển thị như hình sau.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={khoahoc3}
        />
      </div>
      <h3>BÀI VIẾT</h3>
      <p>Dùng để hiển thị các bài viết tiêu biểu hoặc các bài viết mới nhất.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={baiviet1}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={baiviet2}
        />
      </div>
      <p>Kết quả sẽ hiển thị như hình sau. </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={baiviet3}
        />
      </div>
      <h3>TEXT</h3>
      <p>Dùng để hiển thị các nội dung text, có thể chèn background </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={text1}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={text2}
        />
      </div>
      <p>
        <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
        <div>
          <img
            style={{
              width: "700px",
              objectFit: "cover",
              borderRadius: "5px",
              height: "360px",
              border: "1px solid black",
            }}
            src={text3}
          />
        </div>
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={text2}
        />
      </div>

      <h3>ĐÁNH GIÁ</h3>
      <p>Dùng để hiển thị đánh giá của các khóa học </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={danhgia1}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={danhgia1}
        />
      </div>
      <p>Kết quả sẽ hiển thị như hình sau. </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={danhgia1}
        />
      </div>
      <h3>CỘT</h3>
      <p>
        Dùng để tùy chỉnh nhiều nội dung để hiển thị trong một hàng, như text
        (văn bản), media (hình ảnh), video hoặc google maps. Có thể hiển thị tối
        đa 4 cột.
      </p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_text}
        />
      </div>
      <p>Thêm cột là text</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_media}
        />
      </div>
      <p>Thêm cột là media</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_video}
        />
      </div>
      <p>Thêm cột là video</p>
      <p>Đối với cột là Google Maps, ta thực hiện theo các bước sau</p>
      <p>
        Bước 1: Truy cập vào link
        <a href="https://www.google.com/maps"> https://www.google.com/maps</a>
      </p>
      <p>Bước 2:Nhập địa chỉ mà bạn mong muốn</p>
      <p>Bước 3: Tại Menu, chọn Chia sẻ hoặc nhúng bản đồ</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_map1}
        />
      </div>
      <p>Bước 4: Chọn Nhúng bản đồ, rồi chọn Sao chép HTML</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_map2}
        />
      </div>
      <p>Dán link vào khung Nội dung sẽ được kết quả như hình dưới đây.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_map3}
        />
      </div>
      <p>Dán link vào khung Nội dung sẽ được kết quả như hình dưới đây.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_map3}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_final}
        />
      </div>
      <p>Sau đó, bấm Công khai để hiển thị trên trang chủ.</p>
      <div>
        <img
          style={{
            width: "700px",
            objectFit: "cover",
            borderRadius: "5px",
            height: "360px",
            border: "1px solid black",
          }}
          src={cot_video}
        />
      </div>
    </div>
  );
};

export default Trangchu;
