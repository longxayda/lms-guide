import React from 'react'
import img1 from "./2_NỘI DUNG KHÓA HỌC/1.png";
import img2 from "./2_NỘI DUNG KHÓA HỌC/2.png";
const NoiDungKhoaHoc = () => {
  return (
    <div className='main-content'>
        <h1>Nội dung khóa học</h1>
        <p>Trên trang này, chúng ta có thể cập nhật nội dung khóa học. Đây là chức năng chính của khóa học. Bạn sẽ lên kế hoạch cho lớp học của mình tại đây</p>
        <img style={{width:'700px',objectFit:'contain',borderRadius:'5px',height:'360px'}} src={img1}/>
        <p>Để đến trang Nội dung khóa học, tại danh sách khóa học, chúng ta bấm vào tên khóa học</p>
        <img style={{width:'700px',objectFit:'contain',borderRadius:'5px',height:'360px'}} src={img2}/>
    </div>
  )
}

export default NoiDungKhoaHoc