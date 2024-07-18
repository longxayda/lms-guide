import React from 'react';
import gioithieu from '../gioithieu.png';
const AboutPage = () => {
    return (
        <div>
            <h1>Trang Giới thiệu</h1>
            <p>NỀN TẢNG ĐÀO TẠO TRỰC TUYẾN Dành cho Doanh nghiệp, Trung tâm Đào tạo, Trường học. Gi=úp tiết kiệm 50% chi phí và thời gian đào tạo, hỗ trợ đo lường kết quả đào tạo một cách chính xác nhất...Nội dung của trang giới thiệu...</p>
            <img src={gioithieu} style={{width:'700px' ,height:'300px',objectFit:'contain'}}/>
        </div> 
    );
};

export default AboutPage;
