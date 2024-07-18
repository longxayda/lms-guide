import React from "react";
import KTHT_1 from './QUẢN TRỊ VIÊN/1_KHỞI TẠO HỆ THỐNG/KTHT_1.png'
import KTHT_4 from './QUẢN TRỊ VIÊN/1_KHỞI TẠO HỆ THỐNG/KTHT_4.png'
import KTHT_2 from './QUẢN TRỊ VIÊN/1_KHỞI TẠO HỆ THỐNG/KTHT_2.png'
import KTHT_3 from './QUẢN TRỊ VIÊN/1_KHỞI TẠO HỆ THỐNG/KTHT_3.png'
import KTHT_5 from './QUẢN TRỊ VIÊN/1_KHỞI TẠO HỆ THỐNG/KTHT_5.png'
const KhoiTaoHeThong = () => {
  return (
    <div>
      <h1>Khởi Tạo Hệ Thống</h1>
      <div>Hướng dẫn cách đăng ký tài khoản trên hệ thống</div> <br />
      <div>Để đăng ký tài khoản, ta thực hiện theo các bước sau:</div>
      <br />
      <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
        <h3>Bước 1:</h3>
        <p>
           Truy cập vào trang <a href="https://power5.edu.vn"> https://power5.edu.vn</a>
          , chọn nút Đăng nhập
        </p>
      </div>
      <div>
        <img style={{width:'700px',objectFit:'cover',borderRadius:'5px',height:'360px'}} src={KTHT_1} />
      </div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
        <h3>Bước 2:</h3>
        <p>
        Tại màn hình đăng nhập, chọn nút Đăng ký
        </p>
      </div>
      <div>
        <img style={{width:'700px',objectFit:'cover',borderRadius:'5px',height:'360px'}} src={KTHT_4} />
      </div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
        <h3>Bước 3:</h3>
        <p>
        Điền các thông tin cần thiết để tạo tài khoản, sau đó bấm nút Đăng ký
        </p>
      </div>
      <div>
        <img style={{width:'700px',objectFit:'cover',borderRadius:'5px',height:'360px'}} src={KTHT_2} />
      </div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
        <h3>Bước4:</h3>
        <p>
        Sau đó, bạn sẽ nhận được thông báo xác thực tài khoản tại địa chỉ email mà bạn đã đăng ký. Bấm nút Xác thực
        </p>
      </div>
      <div>
        <img style={{width:'700px',objectFit:'cover',borderRadius:'5px',height:'360px'}} src={KTHT_3} />
      </div>
      <div style={{display:'flex',alignContent:'center',alignItems:'center'}}>
        <p>
        Hệ thống sẽ có tên miền như bạn đã đăng ký. 
        </p>
      </div>
      <div>
        <img style={{width:'700px',objectFit:'cover',borderRadius:'5px',height:'360px'}} src={KTHT_5} />
      </div>
    </div>
  );
};

export default KhoiTaoHeThong;
