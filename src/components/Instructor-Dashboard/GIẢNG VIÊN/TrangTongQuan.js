import React from 'react'
import img1 from './1_TRANG TỔNG QUAN/1.png';
import  img2 from './1_TRANG TỔNG QUAN/2.png';
const TrangTongQuan = () => {
  return (
    <div className='main-content'>
        <h1>Trang tổng quan</h1>
        <p>Đây là trang chính giúp Giáo viên có cái nhìn tổng quan về quản lý khóa học và một số tính năng khác</p>
        <img src={img1} style={{width:'700px',objectFit:'contain',borderRadius:'5px',height:'360px'}} />
        <img src={img2} style={{width:'700px',objectFit:'contain',borderRadius:'5px',height:'360px'}} />
        <ul>
            <li>Danh sách khóa học và danh sách lớp học</li>
            <li>Lịch: lên lịch cho tất cả các Buổi học trực tiếp và Lớp học</li>
            <li>Tin nhắn </li>
            <li>Hồ sơ </li>
            <li>Đăng nhập với vai trò khác</li>
        </ul>
    </div>
  )
}

export default TrangTongQuan