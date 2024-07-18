import React from 'react'
import img1 from './GIẢNG VIÊN/3_LỊCH CÁ NHÂN/LÊN LỊCH CÁ NHÂN.png'
const LichCaNhan = () => {
  return (
    <div>
        <h1>Lịch cá nhân</h1>
        <p>Lên lịch cho tất cả các Lớp học trực tiếp và Lớp học</p>
        <img src={img1} style={{width:'700px', height:'380px',objectFit:'contain'}} />
    </div>
  )
}

export default LichCaNhan